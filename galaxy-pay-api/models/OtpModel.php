<?php

/**
 * Clase OTPModel
 *
 * Este modelo gestiona la generación, almacenamiento, validación y eliminación
 * de códigos OTP (One-Time Password) para la verificación de usuarios o
 * autenticación de dos factores. Interactúa directamente con la tabla 'otp'
 * de la base de datos.
 *
 * @package Models
 * @category Authentication
 * @author Tu Nombre <tu.email@example.com>
 * @version 1.0.0
 * @license MIT O cualquier otra licencia que uses.
 */
class OTPModel
{
    /**
     * @var PDO Objeto de conexión a la base de datos.
     * Este objeto se inyecta en el constructor, permitiendo que el modelo
     * realice operaciones de base de datos.
     */
    private PDO $conn;

    /**
     * Constructor de la clase OTPModel.
     *
     * Inicializa el modelo con una conexión a la base de datos inyectada.
     * También establece la zona horaria predeterminada a 'UTC' para asegurar
     * la consistencia en el manejo de fechas y tiempos, lo cual es crítico
     * para la validación de la expiración de los OTPs.
     *
     * @param PDO $conn El objeto de conexión a la base de datos (instancia de PDO).
     */
    public function __construct(PDO $conn)
    {
        $this->conn = $conn;
        // Se establece la zona horaria a UTC para garantizar que los cálculos de tiempo
        // y la persistencia en la DB sean consistentes, independientemente del servidor.
        date_default_timezone_set('UTC');
    }

    /**
     * Genera un nuevo código OTP para un usuario y lo almacena en la base de datos.
     *
     * Este método genera un OTP numérico de 6 dígitos, lo hashea para su almacenamiento seguro,
     * y registra este hash junto con la fecha de generación para el usuario especificado.
     * Utiliza un procedimiento almacenado llamado `generar_otp` para realizar la operación
     * de inserción/actualización en la base de datos.
     *
     * @param int $id_usuario El ID del usuario para quien se generará el OTP.
     * @return string|false El OTP generado en formato de texto plano si la operación fue exitosa,
     * o `false` si hubo un error durante la generación o el almacenamiento.
     */
    public function generarOTP(int $id_usuario): string|false
    {
        // Genera un OTP numérico aleatorio de 6 dígitos y lo rellena con ceros a la izquierda si es necesario.
        $otp_raw = str_pad(mt_rand(0, 999999), 6, '0', STR_PAD_LEFT);
        // Hashea el OTP sin procesar (raw) usando SHA256 para almacenamiento seguro.
        // Nunca almacenes el OTP en texto plano en la base de datos.
        $otp_enc = hash('sha256', $otp_raw);

        // Obtiene la fecha y hora UTC actual en formato 'YYYY-MM-DD HH:MM:SS'.
        $current_datetime = gmdate('Y-m-d H:i:s');

        try {
            // Prepara la llamada al procedimiento almacenado `generar_otp`.
            // Se asume que este SP inserta un nuevo OTP o actualiza uno existente para el usuario.
            // La seguridad se refuerza al usar sentencias preparadas.
            $stmt = $this->conn->prepare("CALL generar_otp(:id_usuario, :otp_enc, :fecha_generacion)");
            // Vincula los parámetros con los valores correspondientes.
            $stmt->bindParam(":id_usuario", $id_usuario, PDO::PARAM_INT);
            $stmt->bindParam(":otp_enc", $otp_enc);
            $stmt->bindParam(":fecha_generacion", $current_datetime);
            // Ejecuta el procedimiento almacenado.
            $success = $stmt->execute();

            // Si la ejecución fue exitosa, retorna el OTP en texto plano para que pueda ser enviado al usuario.
            if ($success) {
                return $otp_raw;
            } else {
                // Registra un error si la ejecución del SP falló.
                error_log("Error al ejecutar sp_generar_otp para usuario ID: " . $id_usuario);
                return false;
            }
        } catch (PDOException $e) {
            // Captura y registra cualquier excepción PDO que ocurra durante la operación.
            error_log("PDOException en generarOTP: " . $e->getMessage());
            return false;
        }
    }

    /**
     * Valida un código OTP ingresado por un usuario contra el almacenado en la base de datos.
     *
     * Este método recupera el OTP encriptado y su fecha de generación de la base de datos
     * para un usuario específico. Luego, compara el hash del OTP ingresado con el hash
     * almacenado y verifica que el OTP no haya expirado dentro del período de validez definido.
     *
     * @param int $id_usuario El ID del usuario para quien se valida el OTP.
     * @param string $otp_ingresado El código OTP en texto plano ingresado por el usuario.
     * @return bool `true` si el OTP es válido y no ha expirado, `false` en caso contrario.
     */
    public function validarOTP(int $id_usuario, string $otp_ingresado): bool
    {
        try {
            // Prepara la consulta para recuperar el OTP encriptado y su fecha de generación.
            $stmt = $this->conn->prepare("SELECT codigo_encriptado, fecha_generacion FROM otp WHERE id_usuario = :id_usuario");
            $stmt->bindParam(":id_usuario", $id_usuario, PDO::PARAM_INT);
            $stmt->execute();
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            // Si no se encuentra ningún OTP para el usuario, se considera inválido.
            if (!$row) {
                error_log("validarOTP: No se encontró OTP en DB para usuario ID: {$id_usuario}.");
                return false;
            }

            // Hashea el OTP ingresado por el usuario para compararlo con el hash almacenado.
            $otp_encriptado_ingresado = hash('sha256', $otp_ingresado);
            // Convierte la fecha de generación de la DB a un timestamp de PHP.
            $tiempo_generacion = strtotime($row['fecha_generacion']);
            // Define el período de validez del OTP en segundos (10 minutos).
            $validity_period_seconds = 600; // 10 minutos = 600 segundos

            // --- Líneas de Depuración (mantener para verificar durante desarrollo, eliminar en producción) ---
            error_log("--- Depuración de validarOTP para ID: {$id_usuario} ---");
            error_log("OTP Ingresado (sin hash): " . $otp_ingresado);
            error_log("OTP Almacenado (HASH de DB): " . $row['codigo_encriptado']);
            error_log("OTP Ingresado (HASH calculado): " . $otp_encriptado_ingresado);
            error_log("Fecha Generación DB: " . $row['fecha_generacion']);
            error_log("Timestamp Generación (PHP - de DB): " . $tiempo_generacion);
            error_log("Timestamp Actual (PHP - de time()): " . time());
            error_log("Diferencia de tiempo (actual - generacion): " . (time() - $tiempo_generacion) . " segundos");
            error_log("Período de validez configurado: " . $validity_period_seconds . " segundos");
            // --- Fin Líneas de Depuración ---

            // Compara los hashes del OTP.
            $hashes_match = ($otp_encriptado_ingresado === $row['codigo_encriptado']);
            // Verifica si el OTP aún no ha expirado.
            $is_not_expired = (time() - $tiempo_generacion <= $validity_period_seconds);

            error_log("Resultado coincidencia HASHES: " . ($hashes_match ? "COINCIDEN" : "NO COINCIDEN"));
            error_log("Resultado validez TIEMPO: " . ($is_not_expired ? "NO EXPIRADO" : "EXPIRADO"));

            // Si los hashes coinciden y el OTP no ha expirado, el OTP es válido.
            if ($hashes_match && $is_not_expired) {
                error_log("validarOTP: OTP para ID {$id_usuario} es VÁLIDO.");
                // **Mejora:** Después de una validación exitosa, es una buena práctica
                // eliminar o invalidar el OTP para evitar su reutilización.
                // $this->eliminarOTP($id_usuario); // Descomentar para invalidar el OTP después de un uso.
                return true;
            } else {
                error_log("validarOTP: OTP para ID {$id_usuario} es INVÁLIDO o EXPIRADO.");
                return false;
            }
        } catch (PDOException $e) {
            // Captura y registra cualquier excepción PDO.
            error_log("PDOException en validarOTP: " . $e->getMessage());
            return false;
        }
    }

    /**
     * Elimina un código OTP de la base de datos para un usuario específico.
     *
     * Este método es útil después de que un OTP ha sido validado exitosamente
     * o cuando se desea invalidar un OTP existente (por ejemplo, si el usuario solicita uno nuevo).
     *
     * @param int $id_usuario El ID del usuario cuyo OTP se eliminará.
     * @return bool `true` si el OTP fue eliminado exitosamente, `false` en caso de error.
     */
    public function eliminarOTP(int $id_usuario): bool
    {
        try {
            // Prepara la consulta para eliminar el registro de OTP.
            $stmt = $this->conn->prepare("DELETE FROM otp WHERE id_usuario = :id_usuario");
            $stmt->bindParam(":id_usuario", $id_usuario, PDO::PARAM_INT);
            // Ejecuta la consulta de eliminación.
            return $stmt->execute();
        } catch (PDOException $e) {
            // Captura y registra cualquier excepción PDO.
            error_log("PDOException en eliminarOTP: " . $e->getMessage());
            return false;
        }
    }
}
