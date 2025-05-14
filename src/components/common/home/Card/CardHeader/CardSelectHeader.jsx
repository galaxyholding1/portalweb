import React from "react";

export const CardSelectHeader = ({icon, title}) => {
  return (
    <div className="card-header">
      <div className="header-title">
        {icon}
        <h3>{title}</h3>
      </div>
      <div className="filter-section">
        <select>
          <option value>01-05-2025</option>
        </select>
      </div>
    </div>
  );
};
