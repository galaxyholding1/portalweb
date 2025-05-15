import React from "react";
import "./RadioInput.css";

export const RadioInput = ({options, value, setValue}) => {
  return (
    <div className="radio-options">
      {
        options.map( ({label, value: v}) => (
          <label className="radio-option">
            <input
              type="radio"
              name={label}
              value={v}
              checked={value == v}
              onChange={(e) => setValue(e.target.value)}
            />
            <span>{label}</span>
          </label>
        ) )
      }
    </div>
  );
};
