<?php
require_once '../config/db.php';
require_once '../models/UserModel.php';
require_once '../utils/Hash.php';
require_once '../utils/Validator.php';
require_once '../models/OTPModel.php';

$db = new DB();
$conn = $db->connect();

$data = json_decode(file_get_contents("php://input"));

if (
    !isset($data->nombre, $data->apellido, $data->correo, $data->telefono, $data->tipo_usuario, $data->contrasena)
) {
    echo json_encode(["status" => "error", "message" => "Datos incompletos"]);
    exit;
}

$nombre = Validator::sanitize($data->nombre);
$apellido = Validator::sanitize($data->apellido);
$correo = Validator::sanitize($data->correo);
$telefono = Validator::sanitize($data->telefono);
$tipo_usuario = Validator::sanitize($data->tipo_usuario);
$contrasena_hash = Hash::make($data->contrasena);

// Por defecto aceptan términos y políticas, o usa lo que venga en el JSON
$acepto_terminos = isset($data->acepto_terminos) ? (bool)$data->acepto_terminos : true;
$acepto_politicas = isset($data->acepto_politicas) ? (bool)$data->acepto_politicas : true;

// Datos corporativos, nulos para usuarios que no son corporativos
$razon_social = $nit = $representante_legal = $direccion = null;
if ($tipo_usuario === 'corporativo') {
    $razon_social = isset($data->razon_social) ? Validator::sanitize($data->razon_social) : null;
    $nit = isset($data->nit) ? Validator::sanitize($data->nit) : null;
    $representante_legal = isset($data->representante_legal) ? Validator::sanitize($data->representante_legal) : null;
    $direccion = isset($data->direccion) ? Validator::sanitize($data->direccion) : null;
}

// El OTP que se pasa a createUser aquí es un valor inicial/por defecto.
// El OTP real para verificación se generará con OTPModel.
$otp_initial = isset($data->otp) ? Validator::sanitize($data->otp) : '000000'; // Este OTP es para el SP de registro de usuario, no el de verificación.

$userModel = new UserModel($conn);
$id_usuario = null;


if ($userModel->correoExiste($correo)) {
    echo json_encode(["status" => "error", "message" => "El correo ya está registrado"]);
    exit;
}

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
    $id_usuario
)) {
    $otpModel = new OTPModel($conn);
    
    $otp_generado = $otpModel->generarOTP($id_usuario);

    if ($otp_generado !== false) {
        
        echo json_encode([
            "status" => "success",
            "id_usuario" => $id_usuario,
            "otp_generado" => $otp_generado 
        ]);
    } else {
        
        echo json_encode(["status" => "error", "message" => "Usuario registrado, pero falló la generación del OTP."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Error al registrar usuario"]);
}
