import React from "react";
// Card with contact summary and amount sent
import { RemittanceConfirmation } from "../../../../components/common/Remittance/RemittanceConfirmation/RemittanceConfirmation";
// Confirmation item showing key remittance data (can be clickable)
import { RemmitanceConfirmationItem } from "../../../../components/common/home/RemmitanceConfirmationItem/RemmitanceConfirmationItem";
// Component representing the final view after a successful transaction

export const TransactionResult = ({ handlerContinue }) => {
  return (
    <div className="remittance-step-container">
      <h1>Reporte</h1>

      <div className="result-container">
        {/* Visual summary of the completed remittance */}
        <RemittanceConfirmation />

        {/* Additional details and possible action (continue) */}
        <RemmitanceConfirmationItem large onClick={handlerContinue} />
      </div>
    </div>
  );
};
