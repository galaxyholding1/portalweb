<?php
require_once '../config/db.php';
require_once '../models/LoginModel.php';
require_once '../utils/Hash.php';
require_once '../utils/Validator.php';
require_once '../utils/JWT.php';

$db = new DB();
$conn = $db->connect();

$data = json_decode(file_get_contents("php://input"));
$correo = Validator::sanitize($data->correo);
$contrasena = $data->contrasena;
$otp = Validator::sanitize($data->otp ?? '');

$loginModel = new LoginModel($conn);
$user = $loginModel->getLoginByEmail($correo);

if (!$user) {
    echo json_encode(["status" => "error", "message" => "Usuario no encontrado"]);
    exit;
}


if ($user['estado'] == 0) {
    $otpData = $loginModel->validateOtp($correo, $otp);
    if (!$otpData) {
        echo json_encode(["status" => "error", "message" => "OTP inválido o cuenta no activada"]);
        exit;
    }


    $stmt = $conn->prepare("UPDATE usuario SET estado = 1 WHERE correo = ?");
    $stmt->execute([$correo]);
}

if (!Hash::check($contrasena, $user['contrasena_hash'])) {
    echo json_encode(["status" => "error", "message" => "Contraseña incorrecta"]);
    exit;
}

$token = JWT::generate([
    "correo" => $correo,
    "id_usuario" => $user['id_usuario']
]);

echo json_encode([
    "status" => "success",
    "message" => "Inicio de sesión exitoso",
    "token" => $token
]);
