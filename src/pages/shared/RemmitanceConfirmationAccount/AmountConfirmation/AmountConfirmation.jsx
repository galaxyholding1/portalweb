import React from "react";
// Component that displays summarized remittance information
import { RemmitanceConfirmationItem } from "../../../../components/common/home/RemmitanceConfirmationItem/RemmitanceConfirmationItem";
// Warning or important message before proceeding
import { ConfirmationWarning } from "../../../../components/common/Remittance/ConfirmationWarning/ConfirmationWarning";

// Component for reviewing and confirming the amount before sending the remittance
export const AmountConfirmation = () => {
  return (
    <div className="remittance-step-container">
      {/* Main title of the step */}
      <h1>Revision y Confirmación</h1>

      {/* Card with transaction details */}
      <RemmitanceConfirmationItem large />

      {/* Warning or extra confirmation message */}
      <ConfirmationWarning />
    </div>
  );
};
