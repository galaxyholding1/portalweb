<?php

/**
 * Clase LoginModel
 *
 * Este modelo maneja todas las operaciones de la base de datos relacionadas
 * con el proceso de inicio de sesión y la validación de OTPs para usuarios.
 * Interactúa con las tablas 'usuario' y 'login' para verificar credenciales
 * y el estado de la cuenta.
 *
 * @package Models
 * @category Authentication
 * @author Tu Nombre <tu.email@example.com>
 * @version 1.0.0
 * @license MIT O cualquier otra licencia que uses.
 */
class LoginModel
{
    /**
     * @var PDO Objeto de conexión a la base de datos.
     * Este objeto se inyecta en el constructor, permitiendo que el modelo
     * realice operaciones de base de datos.
     */
    private PDO $conn;

    /**
     * Constructor de la clase LoginModel.
     *
     * Inicia el modelo con una conexión a la base de datos, inyectada desde el exterior.
     * Esto sigue el principio de Inyección de Dependencias, lo que hace que el modelo
     * sea más fácil de probar y más flexible.
     *
     * @param PDO $db El objeto de conexión a la base de datos (instancia de PDO).
     */
    public function __construct(PDO $db)
    {
        $this->conn = $db;
    }

    /**
     * Obtiene la información de login de un usuario por su correo electrónico.
     *
     * Realiza una consulta a la base de datos para recuperar el ID del usuario,
     * el hash de su contraseña y el estado de su cuenta, basándose en el correo electrónico proporcionado.
     * Realiza un JOIN entre las tablas `usuario` y `login` para obtener la información completa.
     *
     * @param string $correo El correo electrónico del usuario a buscar.
     * @return array|false Un array asociativo con 'id_usuario', 'contrasena_hash' y 'estado' si se encuentra el usuario,
     * o `false` si no se encuentra ningún usuario con ese correo.
     */
    public function getLoginByEmail(string $correo): array|false
    {
        // Define la consulta SQL para seleccionar los datos necesarios.
        // Se utiliza un JOIN para vincular la información del usuario con la de su login.
        $query = "SELECT u.id_usuario, l.contrasena_hash, u.estado FROM usuario u
                  JOIN login l ON u.id_usuario = l.id_usuario WHERE u.correo = :correo";

        // Prepara la consulta para su ejecución.
        // Las sentencias preparadas previenen ataques de inyección SQL.
        $stmt = $this->conn->prepare($query);

        // Vincula el valor del parámetro ':correo' a la variable $correo.
        // Esto asegura que el valor se trate como un dato y no como parte de la consulta SQL.
        $stmt->bindParam(':correo', $correo);

        // Ejecuta la consulta preparada.
        $stmt->execute();

        // Retorna la fila resultante como un array asociativo.
        // Si no se encuentra ninguna fila, retorna `false`.
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    /**
     * Valida un código OTP (One-Time Password) para un usuario específico.
     *
     * Busca en la base de datos si existe una combinación de correo y código OTP válida.
     * Este método se utiliza para verificar la activación de la cuenta o para autenticación de dos factores.
     * Nota: En una implementación más robusta, este método también debería verificar
     * la fecha de expiración del OTP y/o marcar el OTP como usado después de una validación exitosa.
     *
     * @param string $correo El correo electrónico del usuario para quien se valida el OTP.
     * @param string $otp El código OTP ingresado por el usuario.
     * @return array|false Un array asociativo con 'id_usuario' y 'estado' del usuario si el OTP es válido y coincide,
     * o `false` si el OTP es inválido, no coincide o ha expirado.
     */
    public function validateOtp(string $correo, string $otp): array|false
    {
        // Define la consulta SQL para buscar el usuario por correo y el código OTP.
        // Nota: Asume que el `codigo_otp` se almacena directamente en la tabla `usuario`.
        // Para una gestión de OTPs más compleja (varios OTPs por usuario, expiración),
        // se recomendaría una tabla dedicada para OTPs.
        $query = "SELECT id_usuario, estado FROM usuario WHERE correo = :correo AND codigo_otp = :otp";

        // Prepara la consulta.
        $stmt = $this->conn->prepare($query);

        // Vincula los parámetros ':correo' y ':otp'.
        $stmt->bindParam(':correo', $correo);
        $stmt->bindParam(':otp', $otp);

        // Ejecuta la consulta.
        $stmt->execute();

        // Retorna la fila resultante como un array asociativo.
        // Si no se encuentra una coincidencia, retorna `false`.
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
