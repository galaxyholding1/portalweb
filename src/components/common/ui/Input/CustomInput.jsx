import './CustomInput.css'

/**
 * CustomInput Component
 */
export const CustomInput = ({ value, handleInputChange, name, placeholder, type = 'text' }) => (
  <div className="input-container">
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
    />
  </div>
);