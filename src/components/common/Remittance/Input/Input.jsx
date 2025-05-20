import './Input.css'

export const Input = ({ value, handleInputChange, name, placeholder, type = 'text' }) => (
  <input
    className="input-remittance"
    type={type}
    name={name}
    value={value}
    onChange={handleInputChange}
    placeholder={placeholder}
  />
);
