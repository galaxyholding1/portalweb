<?php

/**
 * Controlador de Validación de OTP
 *
 * Este script de API es responsable de recibir un ID de usuario y un OTP,
 * y luego delegar la validación de ese OTP al modelo correspondiente.
 * Es un paso crucial en procesos como la activación de cuenta o la verificación de dos factores.
 *
 * @package Controllers
 * @subpackage Auth
 * @author Tu Nombre <tu.email@example.com>
 * @version 1.0.0
 * @license MIT O cualquier otra licencia que uses.
 */

// Establece el encabezado Content-Type para indicar que la respuesta será en formato JSON.
header("Content-Type: application/json");

// --- Inclusión de Dependencias ---
// Es vital incluir los archivos necesarios para que el script funcione correctamente.

/**
 * @uses DB Clase para gestionar la conexión a la base de datos.
 * Se espera que se encuentre en '../config/db.php'.
 */
require_once '../config/db.php';

/**
 * @uses OTPModel Modelo de datos para la lógica de negocio de OTPs.
 * Contiene el método para validar códigos OTP.
 * Se espera que se encuentre en '../models/OTPModel.php'.
 */
require_once '../models/OTPModel.php';

/**
 * @uses Validator Utilidad para el saneamiento de datos de entrada.
 * Ayuda a prevenir vulnerabilidades de seguridad.
 * Se espera que se encuentre en '../utils/Validator.php'.
 */
require_once '../utils/Validator.php';

// --- Inicialización de la Conexión a la Base de Datos ---
// Crea una instancia de la clase DB para obtener una conexión PDO.
// La clase DB maneja cualquier error de conexión y detiene la ejecución si es necesario.
$db = new DB();
$conn = $db->connect(); // $conn ahora contiene el objeto PDO conectado.

// --- Procesamiento de Datos de Entrada ---
// Decodifica el cuerpo de la solicitud HTTP (asumiendo que es JSON) en un objeto PHP.
$data = json_decode(file_get_contents("php://input"));

// **Validación de Datos Requeridos:**
// Verifica que 'id_usuario' y 'otp' estén presentes en la solicitud.
// Si falta alguno, se envía un error de solicitud inválida (400 Bad Request) y se termina el script.
if (!isset($data->id_usuario, $data->otp)) {
    http_response_code(400); // Bad Request.
    echo json_encode(["status" => "error", "message" => "Datos incompletos: se requiere id_usuario y otp."]);
    exit; // Detiene la ejecución.
}

// Sanea el ID de usuario para asegurar que sea seguro antes de su uso.
$id_usuario = Validator::sanitize($data->id_usuario);
// Sanea el OTP ingresado por el usuario.
$otp_ingresado = Validator::sanitize($data->otp);

// --- Lógica de Validación de OTP ---
// Crea una instancia del OTPModel, pasándole la conexión a la base de datos.
$otpModel = new OTPModel($conn);

// Llama al método `validarOTP` del modelo, el cual contiene la lógica para verificar
// si el OTP coincide con el usuario y si no ha expirado.
$valido = $otpModel->validarOTP($id_usuario, $otp_ingresado);

// --- Envío de Respuesta ---
// Si el método `validarOTP` retorna true, el OTP es válido.
if ($valido) {
    http_response_code(200); // OK.
    echo json_encode(["status" => "success", "message" => "OTP válido."]);
} else {
    // Si retorna false, el OTP es inválido o ha expirado.
    http_response_code(401); // Unauthorized.
    echo json_encode(["status" => "error", "message" => "OTP inválido o expirado. Por favor, solicite uno nuevo si es necesario."]);
}
