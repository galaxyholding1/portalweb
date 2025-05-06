import './Input.css'

export const CustomInput = ({ value, handleInputChange, name, type = 'text' }) => (
  <div className="input-container">
    <label>Correo electrónico</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleInputChange}
    />
  </div>
);
