import React from "react";
import "./NumberInput.css";

/**
 * NumberInput Component
 */
// This component renders a number input field with a label and an icon indicating the type of input (plus or minus).
// It allows users to input numbers, including integers and decimals, while providing visual feedback through the icon.
// The component is designed to be flexible, accepting props for the label, value, change handler, type (plus or minus), and placeholder text.
const NumberInput = ({
  label,
  value,
  onChange,
  type = "plus", // 'plus' or 'minus'
  placeholder = "0",
}) => {
  // Handles changes to the input field, ensuring only valid numbers (integers or decimals) are accepted.
  const handleChange = (e) => {
    const value = e.target.value;
    // Allows empty string or valid numerical formats (e.g., "123", "12.34").
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
            type="text" // Using "text" to allow for controlled decimal input.
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className="number-input"
          />
          {/* Displays the icon based on the 'type' prop. */}
          <span className="number-input-icon">
            {type === "plus" ? "+" : "−"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NumberInput;