<?php
require_once '../config/db.php';
require_once '../models/UserModel.php';
require_once '../utils/JWT.php';


$db = new DB();
$conn = $db->connect();

// Verificar método
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

// Validar token
$headers = getallheaders();
$authHeader = $headers['Authorization'] ?? '';

if (!$authHeader || !preg_match('/Bearer\s(\S+)/', $authHeader, $matches)) {
    http_response_code(401);
    echo json_encode(['error' => 'Token no proporcionado']);
    exit;
}

$token = $matches[1];
$payload = JWT::verify($token);
if (!$payload) {
    http_response_code(401);
    echo json_encode(['error' => 'Token inválido o expirado']);
    exit;
}

// Obtener correo desde query

$correo = $_GET['correo'] ?? null;
if (!$correo) {
    http_response_code(400);
    echo json_encode(['error' => 'Correo es requerido']);
    exit;
}

// Obtener usuario
$userModel = new UserModel($conn);
$usuario = $userModel->obtenerUsuarioPorCorreo($correo);

if ($usuario) {
    echo json_encode($usuario);
} else {
    http_response_code(404);
    echo json_encode(['error' => 'Usuario no encontrado']);
}
