import { SimpleCard } from "../../../../components/common/home/Card/SimpleCard/SimpleCard";
import { AmountContactConfirmation } from "../../../../components/common/Remittance/AmountContactConfirmation/AmountContactConfirmation";
import { RemittanceForm } from "../../../../components/common/home/Remittances/RemittanceForm";
import { RemmitanceConfirmationItem } from "../../../../components/common/home/RemmitanceConfirmationItem/RemmitanceConfirmationItem";
import { Select } from "../../../../components/common/Remittance/Select/Select";
import { RemittanceConfirmation } from "../../../../components/common/Remittance/RemittanceConfirmation/RemittanceConfirmation";
import { ConfirmationWarning } from "../../../../components/common/Remittance/ConfirmationWarning/ConfirmationWarning";

// Result of the people's remittance transaction.
export const TransactionResult = ( {handlerContinue} ) => {
  // This event comes from the stepper or remittance system ^
  return (
    <div className="remittance-step-container">
      <h1>Reporte</h1>
      <div className="result-container">
        <div className="remittance-result-item">
          <RemittanceConfirmation/>
          {/* This event comes from the stepper or remittance system */}
          <RemmitanceConfirmationItem onClick={handlerContinue}/>
        </div>
        <div className="remittance-result-item">
          <RemittanceConfirmation/>
          <RemmitanceConfirmationItem onClick={handlerContinue}/>
        </div>
      </div>
    </div>
  );
};