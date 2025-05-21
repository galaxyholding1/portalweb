import React, { useState } from "react";
import { Card } from "../../../components/common/home/Card/Card";
import { Icon } from "../../../components/common/ui/Icon/Icon";
import { AmountConfirmation } from "./AmountConfirmation/AmountConfirmation";

import banner from "../../../assets/images/banner-large.png";
import "./RemmitanceConfirmationAccount.css";
import "./RemittanceSteps.css";
import { AmountConfiguration } from "./AmountConfiguration/AmountConfiguration";

export const RemmitanceConfirmationAccount = () => {
  const [step, setStep] = useState(1);

  // Provisional, dependiendo funcionamiento de capa de negocio
  const componentByStep = {
    1: <AmountConfiguration />,
    2: <AmountConfirmation />,
  };

  console.log(componentByStep[step]);

  const totalSteps = Object.values(componentByStep).length;

  return (
    <Card title={"Remesas"} icon={<Icon name="remesas_icon" />}>
      <div className="remittance-process-grid">
        <div className="remittance-process-content">
          {componentByStep[step]}
        </div>
        <div className="remittance-process-actions">
          <img src={banner} alt="Banner" />
          <div className="remittance-process-buttons">
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
