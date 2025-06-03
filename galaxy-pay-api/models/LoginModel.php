<?php
class LoginModel
{
    private $conn;
    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function getLoginByEmail($correo)
    {
        $query = "SELECT u.id_usuario, l.contrasena_hash, u.estado FROM usuario u
                  JOIN login l ON u.id_usuario = l.id_usuario WHERE u.correo = :correo";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':correo', $correo);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function validateOtp($correo, $otp)
    {
        $query = "SELECT id_usuario, estado FROM usuario WHERE correo = :correo AND codigo_otp = :otp";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':correo', $correo);
        $stmt->bindParam(':otp', $otp);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
