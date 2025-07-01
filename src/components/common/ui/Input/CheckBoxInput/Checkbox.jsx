import React from "react";
import "./Checkbox.css";

// Checkbox Component
// This component renders a checkbox input with a label.
const Checkbox = ({ label, checked, onChange, id }) => {
  return (
    <div className="checkbox-container">
      <label className="checkbox-label">
        <input
          type="checkbox"
          id={id}
          onChange={onChange}
          className="checkbox-input"
        />
        <span className="checkbox-text">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
