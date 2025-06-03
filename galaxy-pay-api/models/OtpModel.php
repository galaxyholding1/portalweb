<?php

class OTPModel
{
    private $conn;

    public function __construct($conn)
    {
        $this->conn = $conn;
         date_default_timezone_set('UTC');
    }

    public function generarOTP($id_usuario)
    {
        $otp_raw = str_pad(mt_rand(0, 999999), 6, '0', STR_PAD_LEFT);
        $otp_enc = hash('sha256', $otp_raw);

      
        $current_datetime = gmdate('Y-m-d H:i:s'); 

        try {
           
            $stmt = $this->conn->prepare("CALL generar_otp(:id_usuario, :otp_enc, :fecha_generacion)");
            $stmt->bindParam(":id_usuario", $id_usuario, PDO::PARAM_INT);
            $stmt->bindParam(":otp_enc", $otp_enc);
            $stmt->bindParam(":fecha_generacion", $current_datetime); 
            $success = $stmt->execute();

            if ($success) {
                return $otp_raw;
            } else {
                error_log("Error al ejecutar sp_generar_otp para usuario ID: " . $id_usuario);
                return false;
            }
        } catch (PDOException $e) {
            error_log("PDOException en generarOTP: " . $e->getMessage());
            return false;
        }
    }

    public function validarOTP($id_usuario, $otp_ingresado)
    {
        try {
            $stmt = $this->conn->prepare("SELECT codigo_encriptado, fecha_generacion FROM otp WHERE id_usuario = :id_usuario");
            $stmt->bindParam(":id_usuario", $id_usuario, PDO::PARAM_INT);
            $stmt->execute();
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            if (!$row) {
                error_log("validarOTP: No se encontró OTP en DB para usuario ID: {$id_usuario}.");
                return false;
            }

            $otp_encriptado_ingresado = hash('sha256', $otp_ingresado);
            $tiempo_generacion = strtotime($row['fecha_generacion']);
            $validity_period_seconds = 600; // 10 minutos

            // --- Líneas de Depuración (mantener para verificar) ---
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

            $hashes_match = ($otp_encriptado_ingresado === $row['codigo_encriptado']);
            $is_not_expired = (time() - $tiempo_generacion <= $validity_period_seconds);

            error_log("Resultado coincidencia HASHES: " . ($hashes_match ? "COINCIDEN" : "NO COINCIDEN"));
            error_log("Resultado validez TIEMPO: " . ($is_not_expired ? "NO EXPIRADO" : "EXPIRADO"));

            if ($hashes_match && $is_not_expired) {
                error_log("validarOTP: OTP para ID {$id_usuario} es VÁLIDO.");
               
                return true;
            } else {
                error_log("validarOTP: OTP para ID {$id_usuario} es INVÁLIDO o EXPIRADO.");
                return false;
            }
        } catch (PDOException $e) {
            error_log("PDOException en validarOTP: " . $e->getMessage());
            return false;
        }
    }

    public function eliminarOTP($id_usuario)
    {
        try {
            $stmt = $this->conn->prepare("DELETE FROM otp WHERE id_usuario = :id_usuario");
            $stmt->bindParam(":id_usuario", $id_usuario, PDO::PARAM_INT);
            return $stmt->execute();
        } catch (PDOException $e) {
            error_log("PDOException en eliminarOTP: " . $e->getMessage());
            return false;
        }
    }
}
