import './Input.css'

// Componente personalizado del input de remesas.
export const Input = ({ value, handleInputChange, name, placeholder, icon, type = 'text', className = "" }) => (
  <div className={`input-container`}>
    { icon && icon }
    <input
      className={`input-remittance ${className}`}
      type={type}
      name={name}
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
    />
  </div>
);
