import React from "react";
import "./Checkbox.css";

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
