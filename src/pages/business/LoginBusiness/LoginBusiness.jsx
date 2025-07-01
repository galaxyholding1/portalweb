/**
 * @fileoverview Login component for the business portal
 * @module LoginBusiness
 */

// React Router imports for navigation and links
import { Link, useNavigate } from "react-router";
// Component-specific styles
import "./LoginBusiness.css";
// Custom hook for form handling
import { useForm } from "../../../hooks/useForm";
// Custom input components
import { PasswordInput } from "../../../components/common/ui/Input/PasswordInput";
import { CustomInput } from "../../../components/common/ui/Input/CustomInput";

// Banner image for the login page
import bannerImage from "../../../assets/images/banner-home.png";

/**
 * Initial state of the login form
 * @type {Object}
 * @property {string} username - User or identification name
 * @property {string} password - User password
 */
const initialFormState = {
  username: "",
  password: "",
};

/**
 * Login component for the business portal
 * @returns {JSX.Element} Login form with fields for username and password
 */
export const LoginBusiness = () => {
  // Custom hook to manage form state
  const { formValues, handleInputChange } = useForm(initialFormState);
  const navigate = useNavigate();

  /**
   * Handles the submission of the login form
   * @param {Event} e - Form event
   */
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(formValues);
    navigate("/portal-personas/home");
  };

  return (
    <div className="login-screen">
      <main className="login-container">
        {/* Login form */}
        <form onSubmit={handleLogin}>
          <h3 className="login-title">Inicio de sesión</h3>
          <p className="login-description">
            si no tienes un usuario asignado ingresa tu número de identidad.
          </p>
          {/* Form fields container */}
          <div className="form-container">
            {/* Input field for username/identification */}
            <CustomInput
              handleInputChange={handleInputChange}
              value={formValues.username}
              name="username"
              placeholder="NIT o CFI"
            />

            {/* Input field for password */}
            <PasswordInput
              handleInputChange={handleInputChange}
              value={formValues.password}
              name="password"
            />
          </div>

          {/* Form submission button */}
          <button type="submit" className="btn-login-people">
            iniciar sesión
          </button>

          {/* Help links */}
          <nav className="login-links">
            <Link>¿olvidaste tu usuario?</Link>
            <br />
            <Link>¿problemas para conectarte?</Link>
          </nav>
        </form>

        {/* Banner section */}
        <div className="banner">
          {/* Visual Banner */}
          <img src={bannerImage} alt="Banner Visual" />
        </div>
      </main>
    </div>
  );
};