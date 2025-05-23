import './Input.css'

export const Input = ({ value, handleInputChange, name, placeholder, icon, type = 'text' }) => (
  <div className='input-container'>
    { icon && icon }
    <input
      className="input-remittance"
      type={type}
      name={name}
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
    />
  </div>
);
