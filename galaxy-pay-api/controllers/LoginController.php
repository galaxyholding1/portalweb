<?php

/**
 * Controlador de Login
 *
 * Este script actúa como el endpoint de API para las solicitudes de inicio de sesión de usuarios.
 * Se encarga de:
 * 1. Incluir todas las dependencias necesarias (conexión DB, modelo, utilidades de hash, validación y JWT).
 * 2. Establecer la conexión a la base de datos.
 * 3. Procesar y sanear los datos de entrada (correo, contraseña, OTP).
 * 4. Autenticar al usuario contra la base de datos.
 * 5. Manejar la activación de cuentas mediante OTP si es necesario.
 * 6. Generar un JSON Web Token (JWT) tras una autenticación exitosa.
 * 7. Enviar respuestas JSON al cliente.
 *
 * @package Controllers
 * @subpackage Auth
 * @author Tu Nombre <tu.email@example.com>
 * @version 1.0.0
 * @license MIT O cualquier otra licencia que uses.
 */

// Establece el encabezado Content-Type para asegurar que la respuesta HTTP sea JSON.
// Esto es crucial para las APIs RESTful, indicando al cliente cómo interpretar la respuesta.
header("Content-Type: application/json");

// --- Inclusión de Dependencias ---
// Es vital incluir todos los archivos necesarios para que el script funcione correctamente.
// Estos `require_once` aseguran que las clases y funciones estén disponibles.

/**
 * @uses DB Clase para gestionar la conexión a la base de datos.
 * Se espera que se encuentre en '../config/db.php'.
 */
require_once '../config/db.php';

/**
 * @uses LoginModel Modelo de datos para la lógica de negocio de autenticación.
 * Contiene métodos para interactuar con la tabla de usuarios y OTPs.
 * Se espera que se encuentre en '../models/LoginModel.php'.
 */
require_once '../models/LoginModel.php';

/**
 * @uses Hash Utilidad para el manejo seguro de hashes de contraseñas.
 * Contiene métodos para verificar contraseñas hasheadas.
 * Se espera que se encuentre en '../utils/Hash.php'.
 */
require_once '../utils/Hash.php';

/**
 * @uses Validator Utilidad para la validación y saneamiento de datos de entrada.
 * Ayuda a prevenir ataques como la inyección SQL o XSS.
 * Se espera que se encuentre en '../utils/Validator.php'.
 */
require_once '../utils/Validator.php';

/**
 * @uses JWT Utilidad para la creación y gestión de JSON Web Tokens.
 * Es fundamental para la autenticación sin estado en APIs.
 * Se espera que se encuentre en '../utils/JWT.php'.
 */
require_once '../utils/JWT.php';

// --- Inicialización de la Conexión a la Base de Datos ---
// Instancia la clase DB para obtener el objeto de conexión PDO.
// La conexión se maneja dentro de la clase DB, incluyendo el manejo de errores y la terminación del script si falla.
$db = new DB();
$conn = $db->connect(); // $conn ahora contiene el objeto PDO conectado.

// --- Procesamiento de Datos de Entrada ---
// Obtiene el cuerpo de la solicitud HTTP (asumiendo que es JSON) y lo decodifica en un objeto PHP.
$data = json_decode(file_get_contents("php://input"));

// **Validación Inicial de Datos:**
// Es una buena práctica verificar si los datos esperados realmente llegaron.
// Si 'correo' o 'contrasena' no están presentes, se envía un error de solicitud inválida (400 Bad Request).
if (!isset($data->correo) || !isset($data->contrasena)) {
    http_response_code(400); // Código de estado HTTP: Bad Request.
    echo json_encode(["status" => "error", "message" => "Correo y contraseña son requeridos."]);
    exit; // Termina la ejecución del script.
}

// Sanea el correo electrónico del usuario para eliminar cualquier carácter potencialmente dañino.
// Esto es crucial para la seguridad, previniendo ataques de inyección.
$correo = Validator::sanitize($data->correo);

// Almacena la contraseña directamente. No se sanea aquí porque será verificada contra un hash,
// no usada directamente en una consulta o salida HTML.
$contrasena = $data->contrasena;

// Sanea el OTP (One-Time Password). Si no se proporciona en la solicitud, se establece como una cadena vacía.
// Esto permite un manejo flexible para flujos de activación de cuenta o 2FA opcionales.
$otp = Validator::sanitize($data->otp ?? ''); // El operador `??` (null coalescing) de PHP 7+ es muy útil aquí.

// --- Lógica de Negocio de Autenticación ---
// Instancia el LoginModel, inyectándole la conexión a la base de datos.
// Esto desacopla la lógica de negocio de la gestión de la conexión.
$loginModel = new LoginModel($conn);

// Intenta recuperar los datos del usuario de la base de datos utilizando el correo proporcionado.
$user = $loginModel->getLoginByEmail($correo);

// **Manejo de Usuario No Encontrado:**
// Si el método `getLoginByEmail` no retorna un usuario, significa que el correo no está registrado.
// Se envía un mensaje de error genérico para evitar la enumeración de usuarios (no revelar si el correo existe o no).
if (!$user) {
    http_response_code(404); // Se puede usar 404 (Not Found) o 401 (Unauthorized) o incluso 200 con un mensaje genérico por seguridad.
    echo json_encode(["status" => "error", "message" => "Credenciales inválidas"]);
    exit; // Detiene la ejecución.
}

// --- Validación de Estado de Cuenta y OTP (Activación) ---
// Si el usuario existe pero su 'estado' en la base de datos es 0 (usualmente indica cuenta inactiva o pendiente de activación).
if ($user['estado'] == 0) {
    // Intenta validar el OTP proporcionado por el usuario.
    // Se delega al LoginModel la lógica para verificar si el OTP es válido y no ha expirado.
    $otpData = $loginModel->validateOtp($correo, $otp);

    // Si el OTP es inválido o no coincide con el correo/usuario, se envía un error.
    if (!$otpData) {
        http_response_code(401); // Unauthorized
        echo json_encode(["status" => "error", "message" => "OTP inválido o cuenta no activada. Por favor, active su cuenta."]);
        exit; // Detiene la ejecución.
    }

    // Si el OTP es válido, actualiza el estado del usuario a 1 (activo) en la base de datos.
    // Esto se realiza directamente aquí ya que es una acción de "activación" y no una consulta de datos.
    $stmt = $conn->prepare("UPDATE usuario SET estado = 1 WHERE correo = ?");
    $stmt->execute([$correo]);
    // **Nota:** Es una buena práctica invalidar el OTP en la base de datos después de su uso exitoso para evitar reusos.
    // Esto implicaría añadir un método como `$loginModel->invalidateOtp($correo, $otp);`
}

// --- Verificación de Contraseña ---
// Compara la contraseña proporcionada por el usuario con el hash de contraseña almacenado en la DB.
// La clase `Hash::check` se encarga de realizar una comparación segura (ej., usando `password_verify`).
if (!Hash::check($contrasena, $user['contrasena_hash'])) {
    // Si la contraseña no coincide, se envía un mensaje de error.
    // Se usa un mensaje genérico por seguridad, para no dar pistas sobre si el correo es correcto pero la contraseña no.
    http_response_code(401); // Unauthorized
    echo json_encode(["status" => "error", "message" => "Credenciales inválidas"]);
    exit; // Detiene la ejecución.
}

// --- Generación y Retorno del JWT ---
// Si todas las validaciones anteriores (usuario existe, OTP válido si aplica, contraseña correcta) pasan,
// se considera que el usuario está autenticado exitosamente.
// Se genera un JSON Web Token (JWT) con la información del usuario que se necesitará para futuras solicitudes.
// El token contendrá el correo y el ID del usuario como 'claims'.
$token = JWT::generate([
    "correo" => $correo,
    "id_usuario" => $user['id_usuario']
]);

// Envía la respuesta final al cliente en formato JSON, indicando el éxito
// y proporcionando el token de autenticación.
http_response_code(200); // OK
echo json_encode([
    "status" => "success",
    "message" => "Inicio de sesión exitoso",
    "token" => $token // Este token es clave para la autenticación en solicitudes posteriores.
]);
