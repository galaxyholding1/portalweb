import { useState } from "react";
import './PasswordInput.css'
import './CustomInput.css'
import { Icon } from "../Icon/Icon";

export const PasswordInput = ({handleInputChange, value, name, placeholder, className}) => {

  const [ visiblePass, setVisiblePass ] = useState()
  const icon = !visiblePass ? "eye_off" : "eye";
  const containerClass = `input-pass-container ${className ?? ''}`;
  return (
    <div className="input-container">
      <div className={containerClass}>
        <input
          type={visiblePass ? "text" : "password"}
          name={name}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder ? placeholder : "Contraseña"}
          className={className ? className : ""}
        />
        <button type="button" onClick={() => setVisiblePass(!visiblePass)}>
          <Icon name={icon}/>
        </button>
      </div>
    </div>
  );
};
