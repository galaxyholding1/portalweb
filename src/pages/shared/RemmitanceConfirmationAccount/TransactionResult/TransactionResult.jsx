import React from "react";
import { SimpleCard } from "../../../../components/common/home/Card/SimpleCard/SimpleCard";
import { AmountContactConfirmation } from "../../../../components/common/Remittance/AmountContactConfirmation/AmountContactConfirmation";
import { RemittanceForm } from "../../../../components/common/home/Remittances/RemittanceForm";
import { RemmitanceConfirmationItem } from "../../../../components/common/home/RemmitanceConfirmationItem/RemmitanceConfirmationItem";
import { Select } from "../../../../components/common/Remittance/Select/Select";
import { RemittanceConfirmation } from "../../../../components/common/Remittance/RemittanceConfirmation/RemittanceConfirmation";
import { ConfirmationWarning } from "../../../../components/common/Remittance/ConfirmationWarning/ConfirmationWarning";

export const TransactionResult = ({ handlerContinue }) => {
  return (
    <div className="remittance-step-container">
      <h1>Reporte</h1>
      <div className="result-container">
        <RemittanceConfirmation />
        <RemmitanceConfirmationItem large onClick={handlerContinue} />
      </div>
    </div>
  );
};
