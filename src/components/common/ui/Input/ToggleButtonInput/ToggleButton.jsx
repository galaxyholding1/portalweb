import React from "react";
import "./ToggleButton.css";

const ToggleButton = ({ value, onChange, type = "plus", label }) => {
  return (
    <button
      type="button"
      className="toggle-button"
      onClick={() => onChange(!value)}
      aria-label={label}
    >
      <span className="toggle-button-text">{label}</span>
      <span className="toggle-button-icon">{type === "plus" ? "+" : "−"}</span>
    </button>
  );
};

export default ToggleButton;
