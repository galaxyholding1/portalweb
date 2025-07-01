import { useState } from "react";
import './PasswordInput.css'
import './CustomInput.css'
import { Icon } from "../Icon/Icon";

/**
 * PasswordInput Component
 */
export const PasswordInput = ({handleInputChange, value, name, placeholder, className}) => {

  // State to manage the visibility of the password text.
  const [ visiblePass, setVisiblePass ] = useState(false); // Initialize with false for hidden password
  // Determines the icon to display based on password visibility.
  const icon = !visiblePass ? "eye_off" : "eye";
  // Combines base class with any provided additional class names for the container.
  const containerClass = `input-pass-container ${className ?? ''}`;

  return (
    <div className="input-container">
      <div className={containerClass}>
        <input
          type={visiblePass ? "text" : "password"} // Toggles input type between "text" and "password".
          name={name}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder ? placeholder : "Contraseña"} // "Password"
          className={className ? className : ""}
        />
        {/* Button to toggle password visibility. */}
        <button type="button" onClick={() => setVisiblePass(!visiblePass)}>
          <Icon name={icon}/>
        </button>
      </div>
    </div>
  );
};