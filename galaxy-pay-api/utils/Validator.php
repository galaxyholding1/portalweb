<?php

/**
 * Clase Validator
 *
 * Esta clase proporciona métodos estáticos para sanear y limpiar datos de entrada.
 * Es una utilidad esencial para prevenir ataques de inyección de código como
 * Cross-Site Scripting (XSS) y garantizar que los datos sean seguros antes de
 * ser almacenados en la base de datos o mostrados en la interfaz de usuario.
 *
 * @package Utils
 * @category Security
 * @author Tu Nombre <tu.email@example.com>
 * @version 1.0.0
 * @license MIT O cualquier otra licencia que uses.
 */
class Validator
{
    /**
     * Sanea una cadena de datos para prevenir inyecciones de código HTML y XSS.
     *
     * Este método realiza dos operaciones clave:
     * 1. `strip_tags()`: Elimina todas las etiquetas HTML y PHP de la cadena.
     * Esto es una primera línea de defensa contra la inyección de código HTML.
     * 2. `htmlspecialchars()`: Convierte caracteres especiales HTML en entidades HTML.
     * Por ejemplo, `<` se convierte en `&lt;`, `>` en `&gt;`. Esto asegura que
     * el navegador interprete el texto como datos y no como código HTML ejecutable,
     * previniendo ataques XSS (Cross-Site Scripting).
     *
     * Es crucial aplicar este saneamiento a cualquier dato proveniente de la entrada del usuario
     * antes de procesarlo, almacenarlo o mostrarlo.
     *
     * @param string $data La cadena de datos que se va a sanear.
     * @return string La cadena de datos saneada y segura.
     */
    public static function sanitize(string $data): string
    {
        // Primero, elimina todas las etiquetas HTML y PHP para evitar la inyección de código.
        // Luego, convierte los caracteres especiales HTML en entidades para prevenir XSS.
        return htmlspecialchars(strip_tags($data));
    }
}
