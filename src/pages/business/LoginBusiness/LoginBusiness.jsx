import { Link, useNavigate } from "react-router";
import "./LoginBusiness.css";
import { useForm } from "../../../hooks/useForm";
import { PasswordInput } from "../../../components/common/ui/Input/PasswordInput";
import { CustomInput } from "../../../components/common/ui/Input/CustomInput";

import bannerImage from "../../../assets/images/banner-home.png";

const initialFormState = {
  username: "",
  password: "",
};

export const LoginBusiness = () => {
  const { formValues, handleInputChange } = useForm(initialFormState);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(formValues);
    navigate("/portal-personas/home");
  };

  return (
    <div className="login-screen">
      <main className="login-container">
        <form onSubmit={handleLogin}>
          <h3 className="login-title">Inicio de sesión</h3>
          <p className="login-description">
            si no tienes un usuario asignado ingresa tu número de identidad.
          </p>
          <div className="form-container">
            <CustomInput
              handleInputChange={handleInputChange}
              value={formValues.username}
              name="username"
              placeholder="NIT o CFI"
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
          {/* Banner Visual */}
          <img src={bannerImage} alt="Banner Visual" />
        </div>
      </main>
    </div>
  );
};
