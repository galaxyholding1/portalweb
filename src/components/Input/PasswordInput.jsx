import { useState } from "react";

export const PasswordInput = ({handleInputChange, value, name}) => {

  const [ visiblePass, setVisiblePass ] = useState()

  return (
    <span>
      <label>Contraseña</label>
      <input
        type={visiblePass ? "text" : "password"}
        name={name}
        value={value}
        onChange={handleInputChange}
      />
      <button type="button" onClick={() => setVisiblePass(!visiblePass)}>
        👁️
      </button>
    </span>
  );
};
