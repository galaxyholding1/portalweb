import React from "react";
import "./DateInput.css";

const DateInput = ({ label, value, onChange, id }) => {
  return (
    <div className="date-input__group">
      <label htmlFor={id}>{label}</label>
      <input
        type="date"
        id={id}
        value={value}
        placeholder={label}
        onChange={(e) => onChange(e.target.value)}
        className="date-input__field"
      />
    </div>
  );
};

export default DateInput;
