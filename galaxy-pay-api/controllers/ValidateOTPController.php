<?php
require_once '../config/db.php';
require_once '../models/OTPModel.php';
require_once '../utils/Validator.php';

$db = new DB();
$conn = $db->connect();

$data = json_decode(file_get_contents("php://input"));

if (!isset($data->id_usuario, $data->otp)) {
    echo json_encode(["status" => "error", "message" => "Datos incompletos: se requiere id_usuario y otp."]);
    exit;
}

$id_usuario = Validator::sanitize($data->id_usuario);
$otp_ingresado = Validator::sanitize($data->otp);

$otpModel = new OTPModel($conn);

$valido = $otpModel->validarOTP($id_usuario, $otp_ingresado);

if ($valido) {
    echo json_encode(["status" => "success", "message" => "OTP válido."]);
} else {
    echo json_encode(["status" => "error", "message" => "OTP inválido o expirado."]);
}
