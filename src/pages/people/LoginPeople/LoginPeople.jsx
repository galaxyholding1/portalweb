import { Link, useNavigate } from "react-router";
import "./LoginPeople.css";
import { useForm } from "../../../hooks/useForm";
import { PasswordInput } from "../../../components/common/ui/Input/PasswordInput";
import { CustomInput } from "../../../components/common/ui/Input/CustomInput";

import bannerImage from "../../../assets/images/banner-home.png";

// Initial state for the login form
const initialFormState = {
  username: "",
  password: "",
};

// Functional component representing the login screen for individuals
export const LoginPeople = () => {
  const { formValues, handleInputChange } = useForm(initialFormState);
  const navigate = useNavigate();
  // Function executed when the form is submitted
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(formValues);
    navigate("/portal-personas/home");
  };

  return (
    // General container for the login screen
    <div className="login-screen">
      <main className="login-container">
        {/* Login form */}
        <form onSubmit={handleLogin}>
          <h3 className="login-title">Inicio de sesión</h3>
          <p className="login-description">
            si no tienes un usuario asignado ingresa tu número de identidad.
          </p>
          {/* Form inputs */}
          <div className="form-container">
            <CustomInput
              handleInputChange={handleInputChange}
              value={formValues.username}
              name="username"
              placeholder="Usuario o DNI"
            />

            <PasswordInput
              handleInputChange={handleInputChange}
              value={formValues.password}
              name="password"
            />
          </div>

          <button type="submit" className="btn-login-people">
            iniciar sesión
          </button>

          <nav className="login-links">
            <Link>¿olvidaste tu usuario?</Link>
            <br />
            <Link>¿problemas para conectarte?</Link>
          </nav>
        </form>

        <div className="banner">
          {/* Visual Banner */}
          <img src={bannerImage} alt="Banner Visual" />
        </div>
      </main>
    </div>
  );
};
