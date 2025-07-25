import React, { useState } from "react";
import { Card } from "../../../components/common/home/Card/Card";
import { Icon } from "../../../components/common/ui/Icon/Icon";
import { AmountConfirmation } from "./AmountConfirmation/AmountConfirmation";
import banner from "../../../assets/images/banner-large.png";
import "./RemittanceProcess.css";
import "./RemittanceSteps.css";
import { AmountConfiguration } from "./AmountConfiguration/AmountConfiguration";
import { TransactionResult } from "./TransactionResult/TransactionResult";
import { RemittanceDetail } from "./RemittanceDetail/RemittanceDetail";

export const RemittanceProcess = () => {
  // Stepper functionality based on state
  const [step, setStep] = useState(1);

  // Provisional, depending on business layer functionality
  const componentByStep = {
    1: <AmountConfiguration />,
    2: <AmountConfirmation />,
    3: <TransactionResult handlerContinue={() => {}} />,
    4: <RemittanceDetail />,
  };

  // Stepper functionality based on state
  const totalSteps = Object.values(componentByStep).length;
  return (
    <Card
      title={"Remesas"}
      icon={<Icon name="remesas_icon" />}
      className="remittance-process-card"
    >
      <div className="remittance-process-grid">
        <div className="remittance-process-content">
          {/* Provisional, depending on business layer functionality */}
          {componentByStep[step]}
        </div>
        <div className="remittance-process-actions">
          <img src={banner} alt="Banner" />
          <div className="remittance-process-buttons">
            {/* Stepper functionality based on state */}
            <button
              disabled={step == 1}
              onClick={() => setStep(step - 1)}
              className="remittance-process-button back"
            >
              regresar
            </button>
            <button
              disabled={step >= totalSteps}
              onClick={() => setStep(step + 1)}
              className="remittance-process-button continue"
            >
              continuar
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};
