import React from "react";
import "./RadioInput.css";

/**
 * RadioInput Component
 */
export const RadioInput = ({options, value, setValue}) => {
  return (
    <div className="radio-options">
      {
        options.map( ({label, value: v}) => (
          <label className="radio-option">
            <input
              type="radio"
              name={label} // 'name' attribute groups radio buttons so only one can be selected.
              value={v}
              checked={value == v} // Checks if the current radio button's value matches the selected 'value' prop.
              onChange={(e) => setValue(e.target.value)} // Updates the selected value when a radio button is changed.
            />
            <span>{label}</span>
          </label>
        ) )
      }
    </div>
  );
};