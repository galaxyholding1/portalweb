import { useState } from "react";
import './PasswordInput.css'
import './CustomInput.css'

export const PasswordInput = ({handleInputChange, value, name}) => {

  const [ visiblePass, setVisiblePass ] = useState()

  return (
    <div className="input-container">
      <div className="input-pass-container">
        <input
          type={visiblePass ? "text" : "password"}
          name={name}
          value={value}
          onChange={handleInputChange}
          placeholder="Contraseña"
        />
        <button type="button" onClick={() => setVisiblePass(!visiblePass)}>
          
        </button>
      </div>
    </div>
  );
};
