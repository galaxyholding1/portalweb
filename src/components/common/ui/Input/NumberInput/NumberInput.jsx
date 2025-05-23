import React from "react";
import "./NumberInput.css";

const NumberInput = ({
  label,
  value,
  onChange,
  type = "plus", // 'plus' o 'minus'
  placeholder = "0",
}) => {
  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      onChange(value);
    }
  };

  return (
    <div className="number-input-container">
      <div className="number-input-wrapper">
        <span className="number-input-label">{label}</span>
        <div className="number-input-field">
          <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className="number-input"
          />
          <span className="number-input-icon">
            {type === "plus" ? "+" : "−"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NumberInput;
