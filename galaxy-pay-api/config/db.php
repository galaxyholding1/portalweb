<?php

/**
 * Clase DB
 *
 * Esta clase se encarga de establecer y gestionar la conexión a la base de datos
 * utilizando PDO (PHP Data Objects). Proporciona un método para conectar a la
 * base de datos y maneja posibles errores de conexión.
 *
 * @package Core
 * @category Database
 * @author Tu Nombre <tu.email@example.com>
 * @version 1.0.0
 * @license MIT O cualquier otra licencia que uses.
 */
class DB
{
    /**
     * @var string La dirección del host de la base de datos. Por defecto 'localhost'.
     */
    private string $host = 'localhost';

    /**
     * @var string El puerto de la base de datos. Por defecto '3308'.
     */
    private string $port = '3308';

    /**
     * @var string El nombre de la base de datos a la que se conectará. Por defecto 'galaxy_pay'.
     */
    private string $db_name = 'galaxy_pay';

    /**
     * @var string El nombre de usuario para la conexión a la base de datos. Por defecto 'root'.
     */
    private string $username = 'root';

    /**
     * @var string La contraseña para la conexión a la base de datos. Por defecto vacía.
     */
    private string $password = '';

    /**
     * @var PDO|null El objeto de conexión a la base de datos. Será null si no hay conexión activa.
     */
    public ?PDO $conn;

    /**
     * Establece y retorna una conexión a la base de datos.
     *
     * Este método inicializa el objeto PDO para conectar a la base de datos
     * utilizando las credenciales definidas en las propiedades de la clase.
     * Configura el modo de error de PDO para lanzar excepciones en caso de errores.
     * Si la conexión falla, se captura la excepción, se envía un código de respuesta HTTP 500,
     * se retorna un error en formato JSON y se termina la ejecución del script.
     *
     * @return PDO El objeto de conexión a la base de datos (PDO).
     * @throws PDOException Si hay un problema al intentar conectar con la base de datos.
     */
    public function connect(): PDO
    {
        // Aseguramos que la conexión anterior sea nula antes de intentar una nueva.
        $this->conn = null;

        try {
            // Construye el Data Source Name (DSN) para la conexión MySQL.
            $dsn = "mysql:host=" . $this->host . ";port=" . $this->port . ";dbname=" . $this->db_name;

            // Crea una nueva instancia de PDO, intentando conectar a la base de datos.
            $this->conn = new PDO($dsn, $this->username, $this->password);

            // Configura el atributo de PDO para que lance excepciones en caso de errores de SQL.
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            // Captura cualquier excepción PDO que ocurra durante el intento de conexión.
            // Establece el código de respuesta HTTP a 500 (Internal Server Error).
            http_response_code(500);

            // Devuelve un mensaje de error en formato JSON al cliente.
            echo json_encode(["error" => "Database connection failed: " . $e->getMessage()]);

            // Termina la ejecución del script para evitar que continúe con una conexión fallida.
            exit;
        }

        // Retorna el objeto de conexión PDO establecido.
        return $this->conn;
    }
}
