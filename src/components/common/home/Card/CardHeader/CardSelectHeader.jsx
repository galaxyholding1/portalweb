import React from "react";
import { Select } from "../../../Remittance/Select/Select";

export const CardSelectHeader = ({ icon, title }) => {
  return (
    <div className="card-header">
      <div className="header-title">
        {icon}
        <h3>{title}</h3>
      </div>
      {/* Select component for filtering or options related to the card's content. */}
      {/* The options provided are placeholders and should be replaced with dynamic data. */}
      <Select
        options={[
          {label: '01-05-2025', value: '01-05-2025'},
          {label: '01-05-2025', value: '01-05-2025'},
        ]}
        className="select-header"
      />
    </div>
  );
};