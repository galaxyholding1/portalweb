<?php

/**
 * Clase Hash
 *
 * Esta clase proporciona métodos estáticos para la creación (hashing) y
 * verificación de contraseñas de forma segura, utilizando las funciones
 * nativas de PHP para hashing de contraseñas (password_hash y password_verify).
 *
 * @package Utils
 * @category Security
 * @author Tu Nombre <tu.email@example.com>
 * @version 1.0.0
 * @license MIT O cualquier otra licencia que uses.
 */
class Hash
{
    /**
     * Crea un hash seguro de una contraseña dada.
     *
     * Utiliza el algoritmo `PASSWORD_BCRYPT` (recomendado por PHP) para generar
     * un hash de la contraseña. bcrypt es un algoritmo de hashing adaptable
     * que es resistente a los ataques de fuerza bruta y de tablas arcoíris.
     * La función `password_hash` también se encarga de generar un salt aleatorio
     * y seguro automáticamente.
     *
     * @param string $password La contraseña en texto plano que se va a hashear.
     * @return string El hash seguro de la contraseña.
     */
    public static function make(string $password): string
    {
        // PASSWORD_BCRYPT es un algoritmo fuerte y adaptable, actualmente recomendado.
        // PHP gestiona automáticamente la generación de un "salt" único y seguro.
        return password_hash($password, PASSWORD_BCRYPT);
    }

    /**
     * Verifica si una contraseña en texto plano coincide con un hash dado.
     *
     * Este método utiliza la función `password_verify`, la cual es segura contra
     * ataques de temporización. Compara la contraseña en texto plano con el hash
     * almacenado. La función sabe cómo extraer el algoritmo y el salt del hash
     * para realizar la verificación correcta.
     *
     * @param string $password La contraseña en texto plano que se va a verificar.
     * @param string $hashed El hash de la contraseña almacenado (obtenido de la base de datos).
     * @return bool `true` si la contraseña coincide con el hash, `false` en caso contrario.
     */
    public static function check(string $password, string $hashed): bool
    {
        // password_verify es la forma segura de verificar contraseñas hasheadas.
        // Es resistente a ataques de temporización.
        return password_verify($password, $hashed);
    }
}
