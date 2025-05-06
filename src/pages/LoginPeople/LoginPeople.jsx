import { Link } from "react-router";

import "./LoginPeople.css";

import { useForm } from "../../hooks/useForm";
import { PasswordInput } from "../../components/Input/PasswordInput";
import { CustomInput } from "../../components/Input/CustomInput";
import AdSlider from "../../components/AdSlider";

const initialFormState = {
  email: "",
  password: "",
};

export const LoginPeople = () => {
  const { formValues, handleInputChange } = useForm(initialFormState);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <div class="login-screen">

      <h1>Login Personas</h1>
      <main class="login-container">
        <form onSubmit={handleLogin}>

          <CustomInput
            handleInputChange={handleInputChange}
            value={formValues.password}
            name="email"
          />

          <PasswordInput
            handleInputChange={handleInputChange}
            value={formValues.password}
            name="password"
          />

          <button type="submit">Iniciar sesión</button>

          <nav className="login-links">
            <Link>¿Olvidaste tu usuario?</Link>
            <br />
            <Link>¿Problemas para conectarte?</Link>
          </nav>
        </form>

        <nav>
          <Link to="/"> Ve al inicio </Link> <br />
          <Link to="/login-empresas"> Ve al login de empresas </Link>
        </nav>

        <div className="banner">
          {/* Banner Visual */}
          <img
            src="https://fastly.picsum.photos/id/824/800/350.jpg?hmac=dHvkUD6menX6hf15MeTzYI5OaoC5svQduSTRSypV_Bk"
            alt="Banner Visual"
          />
          <p>
            ¿No conoces la Sucursal Virtual Personas de Galaxy? conoce más{" "}
            <Link>aquí</Link>
          </p>
          <span className="dev-text">BANNER PROVISIONAL</span>
        </div>
      </main>
      <aside class="ad-container">
        <AdSlider />
      </aside>
    </div>
  );
};
