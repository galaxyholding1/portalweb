import { Link } from "react-router";

import "./LoginPeople.css";

import { useForm } from "../../hooks/useForm";
import { PasswordInput } from "../../components/Input/PasswordInput";
import { CustomInput } from "../../components/Input/CustomInput";
import AdSlider from "../../components/AdSlider";
import { Footer } from "../../components/Footer/Footer";

const initialFormState = {
  username: "",
  password: "",
};

export const LoginPeople = () => {
  const { formValues, handleInputChange } = useForm(initialFormState);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <div className="login-screen">

      <main className="login-container">
        <form onSubmit={handleLogin}>
          <h3>Inicio de sesión</h3>
          <p>Si no tienes un usuario asignado ingresa tu número de identidad.</p>
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

          <button type="submit" id="btn-login-people">Iniciar sesión</button>

          <nav className="login-links">
            <Link>¿Olvidaste tu usuario?</Link>
            <br />
            <Link>¿Problemas para conectarte?</Link>
          </nav>
        </form>

        <div className="banner">
          {/* Banner Visual */}
          <img
            src="https://cdn.dynamicyield.com/api/8775742/images/5c9b01660f84.jpg"
            alt="Banner Visual"
          />
        </div>
      </main>
      <aside className="ad-container">
        <AdSlider />
      </aside>
    </div>
  );
};
