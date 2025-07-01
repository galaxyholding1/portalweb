<?php

/**
 * Clase UserModel
 *
 * Este modelo gestiona las operaciones de base de datos para la entidad 'usuario'.
 * Proporciona métodos para crear nuevos usuarios, verificar si un correo ya existe,
 * y obtener detalles de un usuario por su correo electrónico.
 * Utiliza procedimientos almacenados para algunas operaciones, lo que puede centralizar
 * la lógica de negocio a nivel de base de datos y mejorar la seguridad.
 *
 * @package Models
 * @category UserManagement
 * @author Tu Nombre <tu.email@example.com>
 * @version 1.0.0
 * @license MIT O cualquier otra licencia que uses.
 */
class UserModel
{
    /**
     * @var PDO Objeto de conexión a la base de datos.
     * Este objeto se inyecta en el constructor, permitiendo que el modelo
     * realice operaciones de base de datos.
     */
    private PDO $conn;

    /**
     * @var string Nombre de la tabla principal de usuarios en la base de datos.
     */
    private string $table = 'usuario';

    /**
     * Constructor de la clase UserModel.
     *
     * Inicializa el modelo con una conexión a la base de datos, inyectada desde el exterior.
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
     * Crea un nuevo usuario en la base de datos.
     *
     * Este método invoca un procedimiento almacenado llamado `sp_registrar_usuario`
     * para manejar la inserción de todos los datos del usuario, incluyendo detalles
     * básicos, aceptación de términos, información corporativa (si aplica), hash
     * de la contraseña y un OTP inicial. También recupera el ID del usuario recién
     * creado a través de un parámetro de salida del procedimiento almacenado.
     *
     * @param string $nombre El nombre del usuario.
     * @param string $apellido El apellido del usuario.
     * @param string $correo La dirección de correo electrónico del usuario.
     * @param string $telefono El número de teléfono del usuario.
     * @param string $tipo_usuario El tipo de usuario (ej. 'personal', 'corporativo').
     * @param bool $acepto_terminos Indica si el usuario aceptó los términos y condiciones.
     * @param bool $acepto_politicas Indica si el usuario aceptó las políticas de privacidad.
     * @param string|null $razon_social La razón social (para usuarios corporativos). Puede ser `null`.
     * @param string|null $nit El NIT (Número de Identificación Tributaria) (para usuarios corporativos). Puede ser `null`.
     * @param string|null $representante_legal El nombre del representante legal (para usuarios corporativos). Puede ser `null`.
     * @param string|null $direccion La dirección (para usuarios corporativos). Puede ser `null`.
     * @param string $contrasena_hash El hash seguro de la contraseña del usuario.
     * @param string $otp Un OTP inicial o de propósito específico que el SP pueda requerir.
     * @param int|null &$id_usuario_out Este parámetro se pasará por referencia. Después de una ejecución exitosa,
     * contendrá el ID del usuario recién creado retornado por el SP.
     * @return bool `true` si el procedimiento almacenado se ejecutó con éxito (no necesariamente si el usuario fue creado,
     * ya que el SP podría tener su propia lógica de error), `false` en caso de error de ejecución de la consulta.
     */
    public function createUser(
        string $nombre,
        string $apellido,
        string $correo,
        string $telefono,
        string $tipo_usuario,
        bool $acepto_terminos,
        bool $acepto_politicas,
        ?string $razon_social,
        ?string $nit,
        ?string $representante_legal,
        ?string $direccion,
        string $contrasena_hash,
        string $otp,
        ?int &$id_usuario_out // Parámetro de salida, se pasa por referencia
    ): bool {
        // La verificación de existencia de correo ya se hace a nivel de controlador.
        // Si el controlador no la hiciera, este método también podría contenerla,
        // pero es mejor tener una única fuente de verdad para esta validación.
        // if ($this->correoExiste($correo)) {
        //     return false;
        // }

        // Construye la llamada al procedimiento almacenado.
        // Se utiliza un parámetro de usuario (`@p_id_usuario`) para obtener el ID de usuario recién creado.
        $query = "CALL sp_registrar_usuario(
            :nombre, :apellido, :correo, :telefono, :tipo_usuario,
            :acepto_terminos, :acepto_politicas,
            :razon_social, :nit, :representante_legal, :direccion,
            :contrasena_hash, :otp,
            @p_id_usuario
        )";

        // Prepara la consulta para su ejecución, lo que ayuda a prevenir inyecciones SQL.
        $stmt = $this->conn->prepare($query);

        // Vincula los parámetros con los valores correspondientes.
        // Se especifica PDO::PARAM_BOOL para los booleanos si la base de datos lo requiere explícitamente.
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
        $stmt->bindParam(':otp', $otp); // El OTP inicial, no el de verificación de cuenta.

        // Ejecuta el procedimiento almacenado.
        $result = $stmt->execute();

        // Si el procedimiento se ejecutó con éxito, se intenta obtener el ID del usuario
        // que fue devuelto como un parámetro de salida por el SP.
        if ($result) {
            // Después de ejecutar el CALL, se realiza un SELECT para obtener el valor de la variable de usuario.
            $select = $this->conn->query("SELECT @p_id_usuario AS id_usuario");
            $out = $select->fetch(PDO::FETCH_ASSOC);
            // Si el ID se obtuvo correctamente, se asigna al parámetro pasado por referencia.
            if ($out && isset($out['id_usuario'])) {
                $id_usuario_out = $out['id_usuario'];
            }
        }

        // Retorna el resultado de la ejecución del procedimiento almacenado.
        return $result;
    }

    /**
     * Verifica si un correo electrónico ya está registrado en el sistema.
     *
     * Realiza una consulta simple a la tabla `usuario` para determinar si ya existe
     * un registro con el correo electrónico dado.
     *
     * @param string $correo La dirección de correo electrónico a verificar.
     * @return bool `true` si el correo ya existe, `false` en caso contrario.
     */
    public function correoExiste(string $correo): bool
    {
        // Define la consulta SQL para buscar el correo.
        $query = "SELECT id_usuario FROM " . $this->table . " WHERE correo = :correo";
        // Prepara la consulta para prevenir inyecciones SQL.
        $stmt = $this->conn->prepare($query);
        // Vincula el parámetro.
        $stmt->bindParam(':correo', $correo);
        // Ejecuta la consulta.
        $stmt->execute();
        // Retorna true si se encontró al menos una fila (el correo existe), false de lo contrario.
        return $stmt->rowCount() > 0;
    }

    /**
     * Obtiene los detalles completos de un usuario por su correo electrónico.
     *
     * Este método invoca un procedimiento almacenado llamado `sp_obtener_usuario_por_correo`
     * para recuperar toda la información relevante de un usuario basándose en su correo.
     *
     * @param string $correo La dirección de correo electrónico del usuario a buscar.
     * @return array|false Un array asociativo con los datos del usuario si se encuentra,
     * o `false` si no se encuentra ningún usuario con ese correo.
     */
    public function obtenerUsuarioPorCorreo(string $correo): array|false
    {
        // Define la llamada al procedimiento almacenado.
        $sql = "CALL sp_obtener_usuario_por_correo(:correo)";
        // Prepara la consulta.
        $stmt = $this->conn->prepare($sql);
        // Vincula el parámetro.
        $stmt->bindParam(':correo', $correo);
        // Ejecuta la consulta.
        $result = $stmt->execute();

        // Retorna la primera fila resultante como un array asociativo.
        // Si no hay resultados, `fetch` retorna `false`.
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
