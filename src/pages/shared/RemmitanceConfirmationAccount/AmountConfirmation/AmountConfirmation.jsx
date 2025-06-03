import React from "react";
import { SimpleCard } from "../../../../components/common/home/Card/SimpleCard/SimpleCard";
import { AmountContactConfirmation } from "../../../../components/common/Remittance/AmountContactConfirmation/AmountContactConfirmation";
import { RemittanceForm } from "../../../../components/common/home/Remittances/RemittanceForm";
import { RemmitanceConfirmationItem } from "../../../../components/common/home/RemmitanceConfirmationItem/RemmitanceConfirmationItem";
import { Select } from "../../../../components/common/Remittance/Select/Select";
import { RemittanceConfirmation } from "../../../../components/common/Remittance/RemittanceConfirmation/RemittanceConfirmation";
import { ConfirmationWarning } from "../../../../components/common/Remittance/ConfirmationWarning/ConfirmationWarning";

export const AmountConfirmation = () => {
  return (
    <div className="remittance-step-container">
      <h1>Revision y Confirmación</h1>

      <RemmitanceConfirmationItem large />

      <ConfirmationWarning />
    </div>
  );
};
