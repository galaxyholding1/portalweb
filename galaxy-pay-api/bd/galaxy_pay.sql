-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-05-2025 a las 23:53:11
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `galaxy_pay`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_actualizar_estado_remesa` (IN `p_id_remesa` INT, IN `p_nuevo_estado` ENUM('pendiente','confirmada','enviada','fallida','cancelada'), IN `p_comentario` VARCHAR(255))   BEGIN
    DECLARE v_ant_estado ENUM('pendiente','confirmada','enviada','fallida','cancelada');
    SELECT estado INTO v_ant_estado FROM remesa WHERE id_remesa = p_id_remesa;
    UPDATE remesa
      SET estado = p_nuevo_estado,
          confirmado_en = IF(p_nuevo_estado='confirmada', NOW(), confirmado_en),
          enviado_en    = IF(p_nuevo_estado='enviada', NOW(), enviado_en)
    WHERE id_remesa = p_id_remesa;
    INSERT INTO remesa_historial(id_remesa, estado_anterior, estado_nuevo, comentario)
    VALUES(p_id_remesa, v_ant_estado, p_nuevo_estado, p_comentario);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_crear_remesa` (IN `p_usuario_rem` INT, IN `p_contacto_dest` INT, IN `p_monto` DECIMAL(15,2), IN `p_pais_dest` VARCHAR(50), IN `p_mon_origen` VARCHAR(10), IN `p_mon_dest` VARCHAR(10), IN `p_tipo_remesa` ENUM('bancaria','efectivo','otro'), IN `p_origen_fondos` VARCHAR(100), IN `p_tasa` DECIMAL(12,6), IN `p_tiempo` VARCHAR(50), OUT `p_id_rem` INT)   BEGIN
    INSERT INTO remesa(id_usuario_remitente, id_contacto_dest, monto, pais_destino,
                       moneda_origen, moneda_destino, tipo_remesa, origen_fondos,
                       tasa_cambio, monto_convertido, tiempo_estimado)
    VALUES(p_usuario_rem, p_contacto_dest, p_monto, p_pais_dest,
           p_mon_origen, p_mon_dest, p_tipo_remesa, p_origen_fondos,
           p_tasa, ROUND(p_monto * p_tasa,2), p_tiempo);
    SET p_id_rem = LAST_INSERT_ID();
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_listar_remesas_filtro` (IN `p_usuario` INT, IN `p_desde` DATE, IN `p_hasta` DATE, IN `p_estado` ENUM('pendiente','confirmada','enviada','fallida','cancelada'), IN `p_destinatario` VARCHAR(100))   BEGIN
    SELECT r.*, c.nombre AS destinatario, c.bandera_pais
    FROM remesa r
    LEFT JOIN contacto c ON r.id_contacto_dest = c.id_contacto
    WHERE r.id_usuario_remitente = p_usuario
      AND r.creado_en BETWEEN p_desde AND p_hasta
      AND (p_estado = '' OR r.estado = p_estado)
      AND (p_destinatario = '' OR c.nombre LIKE CONCAT('%', p_destinatario, '%'))
    ORDER BY r.creado_en DESC;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_registrar_usuario` (IN `p_nombre` VARCHAR(50), IN `p_apellido` VARCHAR(50), IN `p_correo` VARCHAR(100), IN `p_telefono` VARCHAR(20), IN `p_tipo_usuario` ENUM('cliente','corporativo','externo','admin'), IN `p_acepto_terminos` BOOLEAN, IN `p_acepto_politicas` BOOLEAN, IN `p_razon_social` VARCHAR(255), IN `p_nit` VARCHAR(50), IN `p_representante_legal` VARCHAR(255), IN `p_direccion` VARCHAR(255), IN `p_contrasena_hash` VARCHAR(255), IN `p_otp` VARCHAR(6), OUT `p_id_usuario` INT)   BEGIN
    -- Insertar usuario
    INSERT INTO usuario(nombre, apellido, correo, telefono, tipo_usuario, estado, codigo_otp)
    VALUES(p_nombre, p_apellido, p_correo, p_telefono, p_tipo_usuario, 'pendiente', p_otp);
    SET p_id_usuario = LAST_INSERT_ID();
    -- Insertar login
    INSERT INTO login(id_usuario, contrasena_hash) VALUES(p_id_usuario, p_contrasena_hash);
    -- Insertar consentimiento
    INSERT INTO consentimiento(id_usuario, acepto_terminos, acepto_politicas)
    VALUES(p_id_usuario, p_acepto_terminos, p_acepto_politicas);
    -- Insertar datos corporativos si aplica
    IF p_tipo_usuario = 'corporativo' THEN
        INSERT INTO corporativo(id_usuario, razon_social, nit, representante_legal, direccion)
        VALUES(p_id_usuario, p_razon_social, p_nit, p_representante_legal, p_direccion);
    END IF;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auditoria_login`
--

CREATE TABLE `auditoria_login` (
  `id_log` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `ip` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `fecha_hora` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consentimiento`
--

CREATE TABLE `consentimiento` (
  `id_consentimiento` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `acepto_terminos` tinyint(1) NOT NULL,
  `acepto_politicas` tinyint(1) NOT NULL,
  `fecha_aceptacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `consentimiento`
--

INSERT INTO `consentimiento` (`id_consentimiento`, `id_usuario`, `acepto_terminos`, `acepto_politicas`, `fecha_aceptacion`) VALUES
(1, 1, 1, 1, '2025-05-27 21:28:53'),
(2, 2, 1, 1, '2025-05-27 21:40:58');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto`
--

CREATE TABLE `contacto` (
  `id_contacto` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `relacion` varchar(50) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `pais` varchar(50) DEFAULT NULL,
  `bandera_pais` char(2) DEFAULT NULL,
  `es_habitual` tinyint(1) DEFAULT 1,
  `creado_en` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `corporativo`
--

CREATE TABLE `corporativo` (
  `id_corporativo` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `razon_social` varchar(255) NOT NULL,
  `nit` varchar(50) NOT NULL,
  `representante_legal` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `corporativo`
--

INSERT INTO `corporativo` (`id_corporativo`, `id_usuario`, `razon_social`, `nit`, `representante_legal`, `direccion`) VALUES
(1, 2, 'Empresa S.A.', '123456789', 'Juan Perez', 'Calle 123');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuenta`
--

CREATE TABLE `cuenta` (
  `id_cuenta` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `iban` varchar(34) NOT NULL,
  `tipo_cuenta` enum('ahorros','corriente','nómina') DEFAULT 'ahorros',
  `saldo` decimal(15,2) DEFAULT 0.00,
  `moneda` varchar(10) DEFAULT 'USD'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `identidad_digital`
--

CREATE TABLE `identidad_digital` (
  `id_identidad` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `codigo` varchar(255) NOT NULL,
  `fecha_generacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `expiracion` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `informacion_laboral`
--

CREATE TABLE `informacion_laboral` (
  `id_informacion_laboral` bigint(20) UNSIGNED NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `situacion_laboral` varchar(100) NOT NULL,
  `sector_trabajo` varchar(150) NOT NULL,
  `origen_fondos` varchar(100) NOT NULL,
  `ciudadano_fiscal_eeuu` tinyint(1) NOT NULL DEFAULT 0,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `login`
--

CREATE TABLE `login` (
  `id_login` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `contrasena_hash` varchar(255) DEFAULT NULL,
  `ultimo_acceso` timestamp NULL DEFAULT NULL,
  `intentos_fallidos` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `login`
--

INSERT INTO `login` (`id_login`, `id_usuario`, `contrasena_hash`, `ultimo_acceso`, `intentos_fallidos`) VALUES
(1, 1, '$2y$10$VXm21/qnVm8cGky6rHggoOvr/FT9xLYGedGvHFhRnpC9p0Sr22XoK', NULL, 0),
(2, 2, '$2y$10$kLmu2Se5Eer9Idpm3L/gLezB0kJP0rZ/KQS1Ljyd1Hgc29o9WLu46', NULL, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metodo_autenticacion`
--

CREATE TABLE `metodo_autenticacion` (
  `id_metodo` bigint(20) UNSIGNED NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `tipo_metodo` enum('contraseña','reconocimiento_facial','huella','2FA') NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1,
  `creado_en` timestamp NOT NULL DEFAULT current_timestamp(),
  `datos_adicionales` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `moneda`
--

CREATE TABLE `moneda` (
  `id_moneda` bigint(20) UNSIGNED NOT NULL,
  `codigo` varchar(3) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `moneda`
--

INSERT INTO `moneda` (`id_moneda`, `codigo`, `nombre`) VALUES
(1, 'DOL', 'Dólar Estadounidense'),
(2, 'COP', 'Peso Colombiano'),
(3, 'VEF', 'Bolívar Venezolano'),
(4, 'GBP', 'Libra Esterlina'),
(5, 'ARS', 'Peso Argentino'),
(6, 'AMD', 'Dram Armenio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movimiento`
--

CREATE TABLE `movimiento` (
  `id_movimiento` int(11) NOT NULL,
  `id_cuenta` int(11) DEFAULT NULL,
  `id_tarjeta` int(11) DEFAULT NULL,
  `categoria` varchar(50) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `fecha` date NOT NULL,
  `monto` decimal(15,2) NOT NULL,
  `tipo_movimiento` enum('ingreso','gasto') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notificacion`
--

CREATE TABLE `notificacion` (
  `id_notificacion` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `tipo` enum('recordatorio','alerta','info') NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `mensaje` text NOT NULL,
  `leida` tinyint(1) NOT NULL DEFAULT 0,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `origen_dinero`
--

CREATE TABLE `origen_dinero` (
  `id_origen` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pais`
--

CREATE TABLE `pais` (
  `id_pais` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `codigo_iso` char(2) NOT NULL,
  `bandera_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pais`
--

INSERT INTO `pais` (`id_pais`, `nombre`, `codigo_iso`, `bandera_url`) VALUES
(1, 'Afghanistan', 'AF', 'https://flagcdn.com/af.svg'),
(2, 'Algeria', 'DZ', 'https://flagcdn.com/dz.svg'),
(3, 'Andorra', 'AD', 'https://flagcdn.com/ad.svg'),
(4, 'Angola', 'AO', 'https://flagcdn.com/ao.svg'),
(5, 'Argentina', 'AR', 'https://flagcdn.com/ar.svg'),
(6, 'Armenia', 'AM', 'https://flagcdn.com/am.svg'),
(7, 'Australia', 'AU', 'https://flagcdn.com/au.svg'),
(8, 'Austria', 'AT', 'https://flagcdn.com/at.svg'),
(9, 'Azerbaijan', 'AZ', 'https://flagcdn.com/az.svg'),
(10, 'España', 'ES', 'https://flagcdn.com/es.svg'),
(11, 'Estados Unidos', 'US', 'https://flagcdn.com/us.svg'),
(12, 'Colombia', 'CO', 'https://flagcdn.com/co.svg'),
(13, 'Venezuela', 'VE', 'https://flagcdn.com/ve.svg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `remesa`
--

CREATE TABLE `remesa` (
  `id_remesa` int(11) NOT NULL,
  `id_usuario_remitente` int(11) NOT NULL,
  `id_contacto_dest` int(11) DEFAULT NULL,
  `monto` decimal(15,2) NOT NULL,
  `pais_destino` varchar(50) NOT NULL,
  `moneda_origen` varchar(10) NOT NULL,
  `moneda_destino` varchar(10) NOT NULL,
  `tipo_remesa` enum('bancaria','efectivo','otro') DEFAULT 'bancaria',
  `origen_fondos` varchar(100) DEFAULT NULL,
  `tasa_cambio` decimal(12,6) DEFAULT NULL,
  `monto_convertido` decimal(15,2) DEFAULT NULL,
  `tiempo_estimado` varchar(50) DEFAULT NULL,
  `estado` enum('pendiente','confirmada','enviada','fallida','cancelada') DEFAULT 'pendiente',
  `referencia` varchar(50) DEFAULT NULL,
  `creado_en` timestamp NOT NULL DEFAULT current_timestamp(),
  `confirmado_en` timestamp NULL DEFAULT NULL,
  `enviado_en` timestamp NULL DEFAULT NULL,
  `id_moneda` int(11) NOT NULL,
  `id_tipo_remesa` int(11) NOT NULL,
  `id_origen` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `remesa_destino_cuenta`
--

CREATE TABLE `remesa_destino_cuenta` (
  `id_detalle` int(11) NOT NULL,
  `id_remesa` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) DEFAULT NULL,
  `pais` varchar(50) NOT NULL,
  `moneda` varchar(10) NOT NULL,
  `tipo_documento` varchar(50) NOT NULL,
  `numero_documento` varchar(50) NOT NULL,
  `iban` varchar(34) NOT NULL,
  `bic_swift` varchar(11) DEFAULT NULL,
  `monto` decimal(15,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `remesa_historial`
--

CREATE TABLE `remesa_historial` (
  `id_historial` int(11) NOT NULL,
  `id_remesa` int(11) NOT NULL,
  `estado_anterior` enum('pendiente','confirmada','enviada','fallida','cancelada') DEFAULT NULL,
  `estado_nuevo` enum('pendiente','confirmada','enviada','fallida','cancelada') DEFAULT NULL,
  `comentario` varchar(255) DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tarjeta`
--

CREATE TABLE `tarjeta` (
  `id_tarjeta` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `numero_enmascarado` varchar(20) NOT NULL,
  `tipo_tarjeta` enum('visa','mastercard','amex','otro') DEFAULT 'visa',
  `estado` enum('activa','bloqueada','expirada') DEFAULT 'activa',
  `saldo_disponible` decimal(15,2) DEFAULT 0.00,
  `fecha_expiracion` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_remesas`
--

CREATE TABLE `tipo_remesas` (
  `id_tipo_remesa` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `correo` varchar(100) NOT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `tipo_usuario` enum('cliente','corporativo','externo','admin') DEFAULT 'cliente',
  `estado` enum('pendiente','activo','bloqueado') DEFAULT 'pendiente',
  `codigo_otp` varchar(6) DEFAULT NULL,
  `auth_provider` enum('manual','facebook','apple') DEFAULT 'manual',
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_pais` int(11) DEFAULT NULL,
  `usa_reconocimiento_facial` tinyint(1) NOT NULL DEFAULT 0,
  `hash_rostro` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nombre`, `apellido`, `correo`, `telefono`, `tipo_usuario`, `estado`, `codigo_otp`, `auth_provider`, `fecha_creacion`, `id_pais`, `usa_reconocimiento_facial`, `hash_rostro`) VALUES
(1, 'Juana', 'Péreza', 'juana.pereza@example.com', '1234567800', 'cliente', 'pendiente', '123456', 'manual', '2025-05-27 21:28:53', NULL, 0, NULL),
(2, 'yuyu', 'perez', 'yuyu.pereza@example.com', '1234567800', 'corporativo', 'pendiente', '123456', 'manual', '2025-05-27 21:40:58', NULL, 0, NULL);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `vista_remesas_usuario`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `vista_remesas_usuario` (
`id_remesa` int(11)
,`remitente_nombre` varchar(50)
,`remitente_apellido` varchar(50)
,`destinatario_nombre` varchar(100)
,`destinatario_relacion` varchar(50)
,`monto` decimal(15,2)
,`moneda_origen` varchar(10)
,`moneda_destino` varchar(10)
,`tipo_remesa` enum('bancaria','efectivo','otro')
,`origen_fondos` varchar(100)
,`tasa_cambio` decimal(12,6)
,`monto_convertido` decimal(15,2)
,`tiempo_estimado` varchar(50)
,`estado` enum('pendiente','confirmada','enviada','fallida','cancelada')
,`referencia` varchar(50)
,`creado_en` timestamp
);

-- --------------------------------------------------------

--
-- Estructura para la vista `vista_remesas_usuario`
--
DROP TABLE IF EXISTS `vista_remesas_usuario`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vista_remesas_usuario`  AS SELECT `r`.`id_remesa` AS `id_remesa`, `u`.`nombre` AS `remitente_nombre`, `u`.`apellido` AS `remitente_apellido`, `c`.`nombre` AS `destinatario_nombre`, `c`.`relacion` AS `destinatario_relacion`, `r`.`monto` AS `monto`, `r`.`moneda_origen` AS `moneda_origen`, `r`.`moneda_destino` AS `moneda_destino`, `r`.`tipo_remesa` AS `tipo_remesa`, `r`.`origen_fondos` AS `origen_fondos`, `r`.`tasa_cambio` AS `tasa_cambio`, `r`.`monto_convertido` AS `monto_convertido`, `r`.`tiempo_estimado` AS `tiempo_estimado`, `r`.`estado` AS `estado`, `r`.`referencia` AS `referencia`, `r`.`creado_en` AS `creado_en` FROM ((`remesa` `r` join `usuario` `u` on(`r`.`id_usuario_remitente` = `u`.`id_usuario`)) left join `contacto` `c` on(`r`.`id_contacto_dest` = `c`.`id_contacto`)) ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `auditoria_login`
--
ALTER TABLE `auditoria_login`
  ADD PRIMARY KEY (`id_log`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `consentimiento`
--
ALTER TABLE `consentimiento`
  ADD PRIMARY KEY (`id_consentimiento`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `contacto`
--
ALTER TABLE `contacto`
  ADD PRIMARY KEY (`id_contacto`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `corporativo`
--
ALTER TABLE `corporativo`
  ADD PRIMARY KEY (`id_corporativo`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `cuenta`
--
ALTER TABLE `cuenta`
  ADD PRIMARY KEY (`id_cuenta`),
  ADD UNIQUE KEY `iban` (`iban`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `identidad_digital`
--
ALTER TABLE `identidad_digital`
  ADD PRIMARY KEY (`id_identidad`),
  ADD UNIQUE KEY `codigo` (`codigo`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `informacion_laboral`
--
ALTER TABLE `informacion_laboral`
  ADD PRIMARY KEY (`id_informacion_laboral`),
  ADD KEY `fk_usuario_informacion_laboral` (`id_usuario`);

--
-- Indices de la tabla `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id_login`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `metodo_autenticacion`
--
ALTER TABLE `metodo_autenticacion`
  ADD PRIMARY KEY (`id_metodo`),
  ADD KEY `fk_usuario_metodo` (`id_usuario`);

--
-- Indices de la tabla `moneda`
--
ALTER TABLE `moneda`
  ADD PRIMARY KEY (`id_moneda`);

--
-- Indices de la tabla `movimiento`
--
ALTER TABLE `movimiento`
  ADD PRIMARY KEY (`id_movimiento`),
  ADD KEY `id_cuenta` (`id_cuenta`),
  ADD KEY `id_tarjeta` (`id_tarjeta`);

--
-- Indices de la tabla `notificacion`
--
ALTER TABLE `notificacion`
  ADD PRIMARY KEY (`id_notificacion`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `origen_dinero`
--
ALTER TABLE `origen_dinero`
  ADD PRIMARY KEY (`id_origen`);

--
-- Indices de la tabla `pais`
--
ALTER TABLE `pais`
  ADD PRIMARY KEY (`id_pais`),
  ADD UNIQUE KEY `codigo_iso` (`codigo_iso`);

--
-- Indices de la tabla `remesa`
--
ALTER TABLE `remesa`
  ADD PRIMARY KEY (`id_remesa`),
  ADD UNIQUE KEY `referencia` (`referencia`),
  ADD KEY `id_usuario_remitente` (`id_usuario_remitente`),
  ADD KEY `id_contacto_dest` (`id_contacto_dest`),
  ADD KEY `fk_remesas_tipo_remesas` (`id_tipo_remesa`),
  ADD KEY `fk_remesas_origen_dinero` (`id_origen`);

--
-- Indices de la tabla `remesa_destino_cuenta`
--
ALTER TABLE `remesa_destino_cuenta`
  ADD PRIMARY KEY (`id_detalle`),
  ADD KEY `id_remesa` (`id_remesa`);

--
-- Indices de la tabla `remesa_historial`
--
ALTER TABLE `remesa_historial`
  ADD PRIMARY KEY (`id_historial`),
  ADD KEY `id_remesa` (`id_remesa`);

--
-- Indices de la tabla `tarjeta`
--
ALTER TABLE `tarjeta`
  ADD PRIMARY KEY (`id_tarjeta`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `tipo_remesas`
--
ALTER TABLE `tipo_remesas`
  ADD PRIMARY KEY (`id_tipo_remesa`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `correo` (`correo`),
  ADD KEY `idx_usuario_correo` (`correo`),
  ADD KEY `fk_usuario_pais` (`id_pais`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `auditoria_login`
--
ALTER TABLE `auditoria_login`
  MODIFY `id_log` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `consentimiento`
--
ALTER TABLE `consentimiento`
  MODIFY `id_consentimiento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `contacto`
--
ALTER TABLE `contacto`
  MODIFY `id_contacto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `corporativo`
--
ALTER TABLE `corporativo`
  MODIFY `id_corporativo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `cuenta`
--
ALTER TABLE `cuenta`
  MODIFY `id_cuenta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `identidad_digital`
--
ALTER TABLE `identidad_digital`
  MODIFY `id_identidad` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `informacion_laboral`
--
ALTER TABLE `informacion_laboral`
  MODIFY `id_informacion_laboral` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `login`
--
ALTER TABLE `login`
  MODIFY `id_login` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `metodo_autenticacion`
--
ALTER TABLE `metodo_autenticacion`
  MODIFY `id_metodo` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `moneda`
--
ALTER TABLE `moneda`
  MODIFY `id_moneda` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `movimiento`
--
ALTER TABLE `movimiento`
  MODIFY `id_movimiento` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `notificacion`
--
ALTER TABLE `notificacion`
  MODIFY `id_notificacion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `origen_dinero`
--
ALTER TABLE `origen_dinero`
  MODIFY `id_origen` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pais`
--
ALTER TABLE `pais`
  MODIFY `id_pais` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `remesa`
--
ALTER TABLE `remesa`
  MODIFY `id_remesa` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `remesa_destino_cuenta`
--
ALTER TABLE `remesa_destino_cuenta`
  MODIFY `id_detalle` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `remesa_historial`
--
ALTER TABLE `remesa_historial`
  MODIFY `id_historial` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tarjeta`
--
ALTER TABLE `tarjeta`
  MODIFY `id_tarjeta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipo_remesas`
--
ALTER TABLE `tipo_remesas`
  MODIFY `id_tipo_remesa` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `auditoria_login`
--
ALTER TABLE `auditoria_login`
  ADD CONSTRAINT `auditoria_login_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `consentimiento`
--
ALTER TABLE `consentimiento`
  ADD CONSTRAINT `consentimiento_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `contacto`
--
ALTER TABLE `contacto`
  ADD CONSTRAINT `contacto_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `corporativo`
--
ALTER TABLE `corporativo`
  ADD CONSTRAINT `corporativo_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `cuenta`
--
ALTER TABLE `cuenta`
  ADD CONSTRAINT `cuenta_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `identidad_digital`
--
ALTER TABLE `identidad_digital`
  ADD CONSTRAINT `identidad_digital_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `informacion_laboral`
--
ALTER TABLE `informacion_laboral`
  ADD CONSTRAINT `fk_usuario_informacion_laboral` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE;

--
-- Filtros para la tabla `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `login_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `metodo_autenticacion`
--
ALTER TABLE `metodo_autenticacion`
  ADD CONSTRAINT `fk_usuario_metodo` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE;

--
-- Filtros para la tabla `movimiento`
--
ALTER TABLE `movimiento`
  ADD CONSTRAINT `movimiento_ibfk_1` FOREIGN KEY (`id_cuenta`) REFERENCES `cuenta` (`id_cuenta`),
  ADD CONSTRAINT `movimiento_ibfk_2` FOREIGN KEY (`id_tarjeta`) REFERENCES `tarjeta` (`id_tarjeta`);

--
-- Filtros para la tabla `notificacion`
--
ALTER TABLE `notificacion`
  ADD CONSTRAINT `notificacion_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `remesa`
--
ALTER TABLE `remesa`
  ADD CONSTRAINT `fk_remesas_origen_dinero` FOREIGN KEY (`id_origen`) REFERENCES `origen_dinero` (`id_origen`),
  ADD CONSTRAINT `fk_remesas_tipo_remesas` FOREIGN KEY (`id_tipo_remesa`) REFERENCES `tipo_remesas` (`id_tipo_remesa`),
  ADD CONSTRAINT `remesa_ibfk_1` FOREIGN KEY (`id_usuario_remitente`) REFERENCES `usuario` (`id_usuario`),
  ADD CONSTRAINT `remesa_ibfk_2` FOREIGN KEY (`id_contacto_dest`) REFERENCES `contacto` (`id_contacto`);

--
-- Filtros para la tabla `remesa_destino_cuenta`
--
ALTER TABLE `remesa_destino_cuenta`
  ADD CONSTRAINT `remesa_destino_cuenta_ibfk_1` FOREIGN KEY (`id_remesa`) REFERENCES `remesa` (`id_remesa`);

--
-- Filtros para la tabla `remesa_historial`
--
ALTER TABLE `remesa_historial`
  ADD CONSTRAINT `remesa_historial_ibfk_1` FOREIGN KEY (`id_remesa`) REFERENCES `remesa` (`id_remesa`);

--
-- Filtros para la tabla `tarjeta`
--
ALTER TABLE `tarjeta`
  ADD CONSTRAINT `tarjeta_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `fk_usuario_pais` FOREIGN KEY (`id_pais`) REFERENCES `pais` (`id_pais`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
