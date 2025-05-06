import { useForm } from '../../hooks/useForm'
import { PasswordInput } from '../../components/Input/PasswordInput'

import './LoginPeople.css'
import { Link } from 'react-router'
import AdSlider from '../../components/AdSlider'

const initialFormState = {
  email: "",
  password: "",
}

export const LoginPeople = () => {
  const { formValues, handleInputChange } = useForm(initialFormState)

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(formValues)
  }

  return (
    <div style={{padding: '1rem'}}>
      <h1>Login Personas</h1>

      <main>
        <form onSubmit={handleLogin}>
          <div>
            <label>Correo electrónico</label>
            <input 
              type="email" 
              name="email" 
              value={formValues.email} 
              onChange={handleInputChange} 
            />
          </div>
          <br />
          <PasswordInput
            handleInputChange={ handleInputChange }
            value={ formValues.password }
            name="password"
          />
          <br />
          <button type="submit">Iniciar sesión</button>

          <nav className="login-links">
            <Link>¿Olvidaste tu usuario?</Link><br />
            <Link>¿Problemas para conectarte?</Link>
          </nav>
        </form>
        
        <div className='banner'>
          {/* Banner Visual */}
          <img src="https://picsum.photos/500/400" alt="Banner Visual" />
        </div>

        <nav>
          <Link to='/'> Ve al inicio </Link> <br />
          <Link to='/login-empresas'> Ve al login de empresas </Link>
          <Link to='/home-empresas'> Ve al home de empresas </Link>
        </nav>

      </main>

      <AdSlider/>

    </div>
  )
}
