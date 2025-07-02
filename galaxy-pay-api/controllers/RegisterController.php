<?php

/**
 * Controlador de Registro de Usuario
 *
 * Este script maneja las solicitudes HTTP para el registro de nuevos usuarios.
 * Se encarga de:
 * 1. Incluir todas las dependencias necesarias (conexión DB, modelos, utilidades de hash y validación).
 * 2. Establecer la conexión a la base de datos.
 * 3. Procesar y sanear los datos de entrada del usuario.
 * 4. Validar la completitud de los datos recibidos.
 * 5. Verificar si el correo electrónico ya está registrado.
 * 6. Hashear la contraseña de forma segura.
 * 7. Manejar datos específicos para usuarios corporativos.
 * 8. Registrar al nuevo usuario en la base de datos.
 * 9. Generar y retornar un OTP para la verificación de la cuenta.
 * 10. Enviar respuestas JSON al cliente indicando el éxito o fracaso de la operación.
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
// Es fundamental incluir todos los archivos necesarios para que el script funcione correctamente.
// Estos `require_once` aseguran que las clases y funciones estén disponibles.

/**
 * @uses DB Clase para gestionar la conexión a la base de datos.
 * Se espera que se encuentre en '../config/db.php'.
 */
require_once '../config/db.php';

/**
 * @uses UserModel Modelo de datos para la lógica de negocio relacionada con los usuarios.
 * Contiene métodos para interactuar con la tabla de usuarios (creación, verificación de existencia).
 * Se espera que se encuentre en '../models/UserModel.php'.
 */
require_once '../models/UserModel.php';

/**
 * @uses Hash Utilidad para el manejo seguro de hashes de contraseñas.
 * Contiene métodos para crear hashes de contraseñas.
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
 * @uses OTPModel Modelo de datos para la lógica de negocio de OTPs.
 * Contiene métodos para generar y gestionar códigos OTP.
 * Se espera que se encuentre en '../models/OTPModel.php'.
 */
require_once '../models/OTPModel.php';

// --- Inicialización de la Conexión a la Base de Datos ---
// Instancia la clase DB para obtener el objeto de conexión PDO.
// La conexión se maneja dentro de la clase DB, incluyendo el manejo de errores y la terminación del script si falla.
$db = new DB();
$conn = $db->connect(); // $conn ahora contiene el objeto PDO conectado.

// --- Procesamiento de Datos de Entrada ---
// Obtiene el cuerpo de la solicitud HTTP (asumiendo que es JSON) y lo decodifica en un objeto PHP.
$data = json_decode(file_get_contents("php://input"));

// **Validación Inicial de Datos Requeridos:**
// Verifica si todos los campos obligatorios para el registro de usuario están presentes en la solicitud.
// Si falta alguno, se envía un error de solicitud inválida (400 Bad Request) y se termina el script.
if (
    !isset($data->nombre, $data->apellido, $data->correo, $data->telefono, $data->tipo_usuario, $data->contrasena)
) {
    http_response_code(400); // Código de estado HTTP: Bad Request.
    echo json_encode(["status" => "error", "message" => "Datos incompletos. Faltan campos requeridos."]);
    exit; // Termina la ejecución del script.
}

// --- Saneamiento de Datos de Entrada ---
// Sanea cada campo de texto para eliminar o escapar caracteres potencialmente dañinos.
// Esto es crucial para la seguridad, previniendo ataques de inyección de código o XSS.
$nombre = Validator::sanitize($data->nombre);
$apellido = Validator::sanitize($data->apellido);
$correo = Validator::sanitize($data->correo);
$telefono = Validator::sanitize($data->telefono);
$tipo_usuario = Validator::sanitize($data->tipo_usuario);

// Hashea la contraseña proporcionada por el usuario utilizando la clase Hash.
// Esto es fundamental para almacenar contraseñas de forma segura en la base de datos.
$contrasena_hash = Hash::make($data->contrasena);

// Determina el estado de aceptación de términos y políticas.
// Si los campos 'acepto_terminos' o 'acepto_politicas' están presentes en el JSON,
// se usa su valor booleano; de lo contrario, se asume 'true' por defecto.
$acepto_terminos = isset($data->acepto_terminos) ? (bool)$data->acepto_terminos : true;
$acepto_politicas = isset($data->acepto_politicas) ? (bool)$data->acepto_politicas : true;

// --- Manejo de Datos Corporativos (Condicional) ---
// Inicializa las variables para datos corporativos como nulas.
$razon_social = $nit = $representante_legal = $direccion = null;

// Si el tipo de usuario es 'corporativo', se extraen y sanean los campos adicionales.
// Si no están presentes, se mantienen como nulos.
if ($tipo_usuario === 'corporativo') {
    $razon_social = isset($data->razon_social) ? Validator::sanitize($data->razon_social) : null;
    $nit = isset($data->nit) ? Validator::sanitize($data->nit) : null;
    $representante_legal = isset($data->representante_legal) ? Validator::sanitize($data->representante_legal) : null;
    $direccion = isset($data->direccion) ? Validator::sanitize($data->direccion) : null;
}

// El OTP inicial para el procedimiento almacenado de registro de usuario.
// Este no es el OTP de verificación real, sino un valor que el SP podría requerir o usar internamente.
// El OTP real para la activación se generará y enviará por separado.
$otp_initial = isset($data->otp) ? Validator::sanitize($data->otp) : '000000'; // Valor por defecto si no se proporciona.

// --- Lógica de Negocio de Registro ---
// Instancia el UserModel, inyectándole la conexión a la base de datos.
$userModel = new UserModel($conn);

// Inicializa la variable $id_usuario a null.
// Esta variable se usará para almacenar el ID del usuario recién creado, si el registro es exitoso.
$id_usuario = null;

// **Verificación de Correo Existente:**
// Antes de intentar crear el usuario, se verifica si el correo electrónico ya está registrado en el sistema.
if ($userModel->correoExiste($correo)) {
    http_response_code(409); // Conflict (Indica que el recurso ya existe).
    echo json_encode(["status" => "error", "message" => "El correo ya está registrado. Por favor, inicie sesión o recupere su contraseña."]);
    exit; // Detiene la ejecución.
}

// **Creación del Usuario:**
// Llama al método `createUser` del UserModel para registrar al nuevo usuario en la base de datos.
// Se pasan todos los datos saneados y hasheados.
// El último parámetro `$id_usuario` se pasa por referencia (`&`) para que el método pueda
// actualizarlo con el ID del usuario recién insertado.
if ($userModel->createUser(
    $nombre,
    $apellido,
    $correo,
    $telefono,
    $tipo_usuario,
    $acepto_terminos,
    $acepto_politicas,
    $razon_social,
    $nit,
    $representante_legal,
    $direccion,
    $contrasena_hash,
    $otp_initial,
    $id_usuario // Este parámetro se actualizará con el ID del nuevo usuario.
)) {
    // --- Generación y Envío de OTP de Verificación ---
    // Si el usuario se registró exitosamente, se procede a generar un OTP para la activación de la cuenta.
    $otpModel = new OTPModel($conn);

    // Genera un nuevo OTP y lo almacena en la base de datos, asociado al $id_usuario.
    $otp_generado = $otpModel->generarOTP($id_usuario);

    // **Manejo de Resultado de Generación de OTP:**
    if ($otp_generado !== false) {
        // Si el OTP se generó con éxito, envía una respuesta JSON de éxito.
        // Incluye el ID del usuario y el OTP generado (que debería ser enviado al correo/teléfono del usuario).
        http_response_code(201); // Created (Indica que un nuevo recurso ha sido creado exitosamente).
        echo json_encode([
            "status" => "success",
            "message" => "Usuario registrado exitosamente. Se ha enviado un OTP para verificar su cuenta.",
            "id_usuario" => $id_usuario,
            "otp_generado" => $otp_generado // En un entorno real, este OTP no se devolvería al cliente, sino que se enviaría por correo/SMS.
        ]);
    } else {
        // Si el usuario se registró, pero hubo un fallo al generar el OTP.
        // Esto es un escenario de error parcial que debe ser manejado.
        http_response_code(500); // Internal Server Error.
        echo json_encode(["status" => "error", "message" => "Usuario registrado, pero falló la generación del OTP. Por favor, contacte a soporte."]);
    }
} else {
    // --- Manejo de Fallo en el Registro de Usuario ---
    // Si el método `createUser` retorna false (indica un error al insertar en la DB).
    http_response_code(500); // Internal Server Error.
    echo json_encode(["status" => "error", "message" => "Error al registrar usuario. Inténtelo de nuevo más tarde."]);
}
