<?php

/**
 * Controlador para Obtener Detalles del Usuario
 *
 * Este script de API permite recuperar la información completa de un usuario
 * dado su correo electrónico. Requiere un token JWT válido para la autenticación
 * y verifica que el método de solicitud sea GET.
 *
 * @package Controllers
 * @subpackage User
 * @author Tu Nombre <tu.email@example.com>
 * @version 1.0.0
 * @license MIT O cualquier otra licencia que uses.
 */

// Incluye la clase para la conexión a la base de datos.
require_once '../config/db.php';
// Incluye el modelo responsable de la lógica de negocio relacionada con los usuarios.
// Se asume que este archivo contiene la clase UserModel.
require_once '../models/UserModel.php';
// Incluye la clase para la generación y validación de JSON Web Tokens (JWT).
// Se asume que este archivo contiene la clase JWT.
require_once '../utils/JWT.php';

// Establece el encabezado Content-Type para asegurar que la respuesta sea JSON.
header("Content-Type: application/json");

// --- Inicialización de la Conexión a la Base de Datos ---
// Crea una instancia de la clase DB para obtener una conexión a la base de datos.
$db = new DB();
// Establece la conexión a la base de datos. Si falla, la clase DB maneja el error y termina el script.
$conn = $db->connect();

// --- Verificación del Método HTTP ---
// Este endpoint solo debe responder a solicitudes GET.
// Si el método no es GET, se envía un error 405 (Method Not Allowed) y se termina el script.
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405); // Código de estado HTTP: Method Not Allowed.
    echo json_encode(['error' => 'Método no permitido. Use GET.']);
    exit; // Detiene la ejecución.
}

// --- Validación del Token JWT ---
// Obtiene todos los encabezados de la solicitud HTTP.
$headers = getallheaders();
// Extrae el encabezado 'Authorization'. Si no existe, se usa una cadena vacía.
$authHeader = $headers['Authorization'] ?? '';

// Verifica si el encabezado de autorización está presente y si sigue el formato 'Bearer <token>'.
// 'preg_match' busca el patrón 'Bearer ' seguido de cualquier secuencia de caracteres no espaciales.
if (!$authHeader || !preg_match('/Bearer\s(\S+)/', $authHeader, $matches)) {
    http_response_code(401); // Código de estado HTTP: Unauthorized.
    echo json_encode(['error' => 'Token de autenticación no proporcionado o formato inválido (Bearer <token>).']);
    exit; // Detiene la ejecución.
}

// Extrae el token JWT del patrón encontrado.
$token = $matches[1];
// Verifica el token utilizando la utilidad JWT. Esto valida la firma y la expiración.
$payload = JWT::verify($token);

// Si el token no es válido (firma incorrecta o expirado), se envía un error 401.
if (!$payload) {
    http_response_code(401); // Código de estado HTTP: Unauthorized.
    echo json_encode(['error' => 'Token inválido o expirado.']);
    exit; // Detiene la ejecución.
}

// --- Obtención y Validación del Correo del Usuario ---
// El correo del usuario se espera como un parámetro de consulta en la URL (ej. /api/user?correo=test@example.com).
$correo = $_GET['correo'] ?? null;

// Si el correo no se proporciona en los parámetros de consulta, se envía un error 400 (Bad Request).
if (!$correo) {
    http_response_code(400); // Código de estado HTTP: Bad Request.
    echo json_encode(['error' => 'El parámetro "correo" es requerido en la URL.']);
    exit; // Detiene la ejecución.
}

// --- Recuperación de Información del Usuario ---
// Crea una instancia del UserModel, inyectándole la conexión a la base de datos.
$userModel = new UserModel($conn);
// Llama al método del modelo para obtener los detalles del usuario por su correo electrónico.
$usuario = $userModel->obtenerUsuarioPorCorreo($correo);

// --- Envío de Respuesta ---
// Si se encontró al usuario, se devuelve un objeto JSON con todos sus datos.
if ($usuario) {
    http_response_code(200); // Código de estado HTTP: OK.
    echo json_encode($usuario);
} else {
    // Si el usuario no fue encontrado (después de una autenticación exitosa), se envía un error 404 (Not Found).
    http_response_code(404); // Código de estado HTTP: Not Found.
    echo json_encode(['error' => 'Usuario no encontrado.']);
}
