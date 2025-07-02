<?php

/**
 * Clase JWT
 *
 * Esta clase proporciona métodos estáticos para la creación y verificación
 * de JSON Web Tokens (JWTs). Los JWTs son una forma compacta y segura de
 * transmitir información entre dos partes como un objeto JSON.
 * Es crucial para la autenticación sin estado en APIs RESTful.
 *
 * @package Utils
 * @category Security
 * @author Tu Nombre <tu.email@example.com>
 * @version 1.0.0
 * @license MIT O cualquier otra licencia que uses.
 */
class JWT
{
    /**
     * @var string La clave secreta utilizada para firmar y verificar los JWTs.
     * Esta clave DEBE ser mantenida en secreto y no debe ser compartida ni expuesta.
     * Es la base de la seguridad de tus tokens. Se recomienda que esta clave
     * sea un string largo y aleatorio, no una cadena codificada en base64 de un JWT.
     *
     * ¡ADVERTENCIA DE SEGURIDAD! El valor actual de esta clave `$secret`
     * parece ser un JWT codificado en base64. Esto es EXTREMADAMENTE INSEGURO.
     * Una clave secreta debe ser una cadena aleatoria y compleja (ej. generada por `bin2hex(random_bytes(32))`),
     * NO un JWT u otra información predecible/decodificable.
     * Esto hace que tu clave sea fácilmente predecible si alguien inspecciona tus tokens.
     */
    private static string $secret = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMDI1MzAiLCJuYW1lIjoiZ2FsYXh5X3BheSIsImFkbWluIjp0cnVlLCJpYXQiOjI3MDUyMDI1MH0.a6qqztgBJsxphMFiCxgcXnL1qqc_yWLWmVfrL2ZIERQ";
    // ¡CORRECCIÓN RECOMENDADA!: Reemplaza la línea anterior con algo como:
    // private static string $secret = 'tu_clave_secreta_super_larga_y_aleatoria_generada_cryptograficamente';


    /**
     * Genera un nuevo JSON Web Token (JWT).
     *
     * Construye un JWT compuesto por un encabezado, un payload y una firma.
     * El encabezado y el payload se codifican en Base64Url y luego se utiliza
     * el algoritmo HMAC SHA256 con la clave secreta para crear la firma.
     * Se incluye automáticamente una marca de tiempo de expiración en el payload.
     *
     * @param array $payload Un array asociativo que contendrá los "claims" (datos) del token.
     * Ejemplo: `['id_usuario' => 123, 'rol' => 'admin']`.
     * @param int $exp La duración de la validez del token en segundos. Por defecto, 1800 segundos (30 minutos).
     * @return string El JWT generado en formato compactado (header.payload.signature).
     */
    public static function generate(array $payload, int $exp = 1800): string
    {
        // 1. Encabezado JWT (Header)
        // Define el algoritmo de firma (HS256) y el tipo de token (JWT).
        $header = json_encode(['alg' => 'HS256', 'typ' => 'JWT']);

        // 2. Payload JWT (Claims)
        // Agrega el claim 'exp' (expiration time) al payload, basado en el tiempo actual más la duración deseada.
        $payload['exp'] = time() + $exp;
        // Convierte el payload a JSON.

        // 3. Codificación Base64Url
        // Codifica el encabezado y el payload en Base64Url.
        // str_replace se utiliza para asegurar que la codificación sea compatible con Base64Url
        // (reemplazando '+', '/' y '=' por '-', '_' y nada, respectivamente).
        $base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
        $base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode(json_encode($payload)));

        // 4. Firma JWT (Signature)
        // Calcula la firma utilizando HMAC SHA256 sobre la concatenación del encabezado y el payload codificados,
        // usando la clave secreta. El parámetro 'true' en hash_hmac asegura una salida binaria.
        $signature = hash_hmac('sha256', "$base64UrlHeader.$base64UrlPayload", self::$secret, true);
        // Codifica la firma binaria en Base64Url.
        $base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));

        // 5. Retorna el JWT completo en formato compacto.
        return "$base64UrlHeader.$base64UrlPayload.$base64UrlSignature";
    }

    /**
     * Verifica un JSON Web Token (JWT).
     *
     * Este método realiza las siguientes verificaciones:
     * 1. Estructura del token: Debe tener 3 partes separadas por puntos.
     * 2. Integridad de la firma: Recalcula la firma y la compara con la firma proporcionada en el token.
     * 3. Expiración del token: Verifica si el token ha expirado.
     *
     * @param string $jwt El JWT a verificar.
     * @return array|false Un array asociativo con el payload del token si es válido y no ha expirado,
     * o `false` si el token es inválido (estructura incorrecta, firma no coincide, expirado).
     */
    public static function verify(string $jwt): array|false
    {
        // 1. Separar el JWT en sus tres partes: encabezado, payload y firma.
        $parts = explode('.', $jwt);
        // Si no tiene exactamente 3 partes, el token es inválido.
        if (count($parts) !== 3) {
            error_log("JWT inválido: No tiene 3 partes.");
            return false;
        }

        // Asigna las partes a variables.
        [$header, $payload, $signature] = $parts;

        // 2. Verificar la firma.
        // Recalcula la firma utilizando el encabezado y el payload originales y la clave secreta.
        $validSignature = hash_hmac('sha256', "$header.$payload", self::$secret, true);
        // Codifica la firma recalculada en Base64Url para compararla.
        $validBase64 = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($validSignature));

        // Compara la firma recalculada con la firma del token recibido.
        // Si no coinciden, el token ha sido alterado o la clave secreta es incorrecta.
        if ($validBase64 !== $signature) {
            error_log("JWT inválido: La firma no coincide.");
            return false;
        }

        // 3. Decodificar el Payload y verificar la expiración.
        // Decodifica el payload de Base64Url a JSON y luego a un array asociativo.
        $payloadArray = json_decode(base64_decode(str_replace(['-', '_'], ['+', '/'], $payload)), true);

        // Verifica si el payload se decodificó correctamente y si contiene el claim 'exp'.
        if (!is_array($payloadArray) || !isset($payloadArray['exp'])) {
            error_log("JWT inválido: Payload mal formado o sin claim 'exp'.");
            return false;
        }

        // Verifica si el token ha expirado (si el tiempo de expiración es menor al tiempo actual).
        if ($payloadArray['exp'] < time()) {
            error_log("JWT expirado. Tiempo de expiración: " . date('Y-m-d H:i:s', $payloadArray['exp']) . " (UTC). Tiempo actual: " . date('Y-m-d H:i:s', time()) . " (UTC).");
            return false;
        }

        // Si todas las verificaciones son exitosas, retorna el payload.
        return $payloadArray;
    }
}
