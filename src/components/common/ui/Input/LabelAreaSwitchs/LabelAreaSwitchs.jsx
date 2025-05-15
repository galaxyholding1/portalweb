import React from "react";
import './LabelAreaSwitchs.css'

export const LabelAreaSwitchs = ({ options, optionValues, setOptionValues }) => {
  return (
    <div className="operations-list">
      {options.map((option) => (
        <div key={option.key} className="operation-item">
          <span>{option.label}</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={optionValues[option.key]}
              onChange={() =>
                setOptionValues({
                  ...optionValues,
                  [option.key]: !optionValues[option.key],
                })
              }
            />
            <span className="slider"></span>
          </label>
        </div>
      ))}
    </div>
  );
};
