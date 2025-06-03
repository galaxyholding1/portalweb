<?php
class Validator
{
    public static function sanitize($data)
    {
        return htmlspecialchars(strip_tags($data));
    }
}
