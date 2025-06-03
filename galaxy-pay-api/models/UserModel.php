<?php
class UserModel
{
    private $conn;
    private $table = 'usuario';

    public function __construct($db)
    {
        $this->conn = $db;
    }

    // Todos los parámetros que el procedimiento espera, el último es OUT pasado por referencia
    public function createUser(
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
        $otp,
        &$id_usuario_out
    ) {



        if ($this->correoExiste($correo)) {
            return false;
        }


        $query = "CALL sp_registrar_usuario(
            :nombre, :apellido, :correo, :telefono, :tipo_usuario,
            :acepto_terminos, :acepto_politicas,
            :razon_social, :nit, :representante_legal, :direccion,
            :contrasena_hash, :otp,
            @p_id_usuario
        )";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':apellido', $apellido);
        $stmt->bindParam(':correo', $correo);
        $stmt->bindParam(':telefono', $telefono);
        $stmt->bindParam(':tipo_usuario', $tipo_usuario);
        $stmt->bindParam(':acepto_terminos', $acepto_terminos, PDO::PARAM_BOOL);
        $stmt->bindParam(':acepto_politicas', $acepto_politicas, PDO::PARAM_BOOL);
        $stmt->bindParam(':razon_social', $razon_social);
        $stmt->bindParam(':nit', $nit);
        $stmt->bindParam(':representante_legal', $representante_legal);
        $stmt->bindParam(':direccion', $direccion);
        $stmt->bindParam(':contrasena_hash', $contrasena_hash);
        $stmt->bindParam(':otp', $otp);

        $result = $stmt->execute();

        if ($result) {
            // Obtener valor OUT
            $select = $this->conn->query("SELECT @p_id_usuario AS id_usuario");
            $out = $select->fetch(PDO::FETCH_ASSOC);
            if ($out && isset($out['id_usuario'])) {
                $id_usuario_out = $out['id_usuario'];
            }
        }

        return $result;
    }

    public function correoExiste($correo)
    {
        $query = "SELECT id_usuario FROM usuario WHERE correo = :correo"; // CORREGIDO AQUÍ
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':correo', $correo);
        $stmt->execute();
        return $stmt->rowCount() > 0;
    }


    public function obtenerUsuarioPorCorreo($correo)
    {
        $sql = "CALL sp_obtener_usuario_por_correo(:correo)";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':correo', $correo);
        $result = $stmt->execute();


        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
