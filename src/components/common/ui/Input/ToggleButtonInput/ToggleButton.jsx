import React from "react";
import "./ToggleButton.css";

/**
 * ToggleButton Component
 */
const ToggleButton = ({ value, onChange, type = "plus", label }) => {
  return (
    <button
      type="button"
      className="toggle-button"
      onClick={() => onChange(!value)} // Toggles the boolean 'value' on click.
      aria-label={label} // Provides an accessible label for screen readers.
    >
      <span className="toggle-button-text">{label}</span>
      <span className="toggle-button-icon">{type === "plus" ? "+" : "−"}</span>
    </button>
  );
};

export default ToggleButton;