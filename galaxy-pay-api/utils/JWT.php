<?php
class JWT
{
    private static $secret = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMDI1MzAiLCJuYW1lIjoiZ2FsYXh5X3BheSIsImFkbWluIjp0cnVlLCJpYXQiOjI3MDUyMDI1MH0.a6qqztgBJsxphMFiCxgcXnL1qqc_yWLWmVfrL2ZIERQ";

    public static function generate($payload, $exp = 1800) // 30 minutos por defecto
    {
        $header = json_encode(['alg' => 'HS256', 'typ' => 'JWT']);
        $payload['exp'] = time() + $exp;

        $base64UrlHeader = str_replace(['+', '/', '='], ['-', '_'], base64_encode($header));
        $base64UrlPayload = str_replace(['+', '/', '='], ['-', '_'], base64_encode(json_encode($payload)));

        $signature = hash_hmac('sha256', "$base64UrlHeader.$base64UrlPayload", self::$secret, true);
        $base64UrlSignature = str_replace(['+', '/', '='], ['-', '_'], base64_encode($signature));

        return "$base64UrlHeader.$base64UrlPayload.$base64UrlSignature";
    }

    public static function verify($jwt)
    {
        $parts = explode('.', $jwt);
        if (count($parts) !== 3) return false;

        [$header, $payload, $signature] = $parts;
        $validSignature = hash_hmac('sha256', "$header.$payload", self::$secret, true);
        $validBase64 = str_replace(['+', '/', '='], ['-', '_'], base64_encode($validSignature));

        if ($validBase64 !== $signature) return false;

        $payloadArray = json_decode(base64_decode($payload), true);
        if (!isset($payloadArray['exp']) || $payloadArray['exp'] < time()) return false;

        return $payloadArray;
    }
}
