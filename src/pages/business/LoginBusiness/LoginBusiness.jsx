/**
 * @fileoverview Componente de inicio de sesión para el portal de negocios
 * @module LoginBusiness
 */

// Importaciones de React Router para navegación y enlaces
import { Link, useNavigate } from "react-router";
// Estilos específicos del componente
import "./LoginBusiness.css";
// Hook personalizado para manejo de formularios
import { useForm } from "../../../hooks/useForm";
// Componentes de entrada personalizados
import { PasswordInput } from "../../../components/common/ui/Input/PasswordInput";
import { CustomInput } from "../../../components/common/ui/Input/CustomInput";

// Imagen del banner para la página de inicio de sesión
import bannerImage from "../../../assets/images/banner-home.png";

/**
 * Estado inicial del formulario de inicio de sesión
 * @type {Object}
 * @property {string} username - Nombre de usuario o identificación
 * @property {string} password - Contraseña del usuario
 */
const initialFormState = {
  username: "",
  password: "",
};

/**
 * Componente de inicio de sesión para el portal de negocios
 * @returns {JSX.Element} Formulario de inicio de sesión con campos para usuario y contraseña
 */
export const LoginBusiness = () => {
  // Hook personalizado para manejar el estado del formulario
  const { formValues, handleInputChange } = useForm(initialFormState);
  const navigate = useNavigate();

  /**
   * Maneja el envío del formulario de inicio de sesión
   * @param {Event} e - Evento del formulario
   */
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(formValues);
    navigate("/portal-personas/home");
  };

  return (
    <div className="login-screen">
      <main className="login-container">
        {/* Formulario de inicio de sesión */}
        <form onSubmit={handleLogin}>
          <h3 className="login-title">Inicio de sesión</h3>
          <p className="login-description">
            si no tienes un usuario asignado ingresa tu número de identidad.
          </p>
          {/* Contenedor de campos del formulario */}
          <div className="form-container">
            {/* Campo de entrada para el nombre de usuario/identificación */}
            <CustomInput
              handleInputChange={handleInputChange}
              value={formValues.username}
              name="username"
              placeholder="NIT o CFI"
            />

            {/* Campo de entrada para la contraseña */}
            <PasswordInput
              handleInputChange={handleInputChange}
              value={formValues.password}
              name="password"
            />
          </div>

          {/* Botón de envío del formulario */}
          <button type="submit" className="btn-login-people">
            iniciar sesión
          </button>

          {/* Enlaces de ayuda */}
          <nav className="login-links">
            <Link>¿olvidaste tu usuario?</Link>
            <br />
            <Link>¿problemas para conectarte?</Link>
          </nav>
        </form>

        {/* Sección del banner */}
        <div className="banner">
          {/* Banner Visual */}
          <img src={bannerImage} alt="Banner Visual" />
        </div>
      </main>
    </div>
  );
};
