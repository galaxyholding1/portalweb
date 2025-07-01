import React, { useState } from "react";
import { Card } from "../../../components/common/home/Card/Card";
import { Icon } from "../../../components/common/ui/Icon/Icon";
import { AmountConfirmation } from "./AmountConfirmation/AmountConfirmation";
import banner from "../../../assets/images/banner-large.png";
import "./RemmitanceConfirmationAccount.css";
import "./RemittanceSteps.css";
import { TransactionResult } from "./TransactionResult/TransactionResult";
import { RemittanceDetail } from "./RemittanceDetail/RemittanceDetail";

export const RemmitanceConfirmationAccount = () => {
  const [step, setStep] = useState(1); // Control del paso actual

  // Función para avanzar al siguiente paso
  const handlerNext = () => setStep((step) => step + 1);

  // Mapeo de componentes por paso
  const componentByStep = {
    1: <AmountConfirmation />,
    2: <TransactionResult handlerContinue={handlerNext} />,
    3: <RemittanceDetail />,
  };

  const totalSteps = Object.values(componentByStep).length;

  return (
    <Card title={"Remesas"} icon={<Icon name="remesas_icon" />}>
      <div className="remittance-process-grid">
        {/* Contenido dinámico del paso actual */}
        <div className="remittance-process-content">
          {componentByStep[step]}
        </div>

        {/* Sección lateral con imagen y botones */}
        <div className="remittance-process-actions">
          <img src={banner} alt="Banner" />

          <div className="remittance-process-buttons">
            {/* Botón para retroceder */}
            <button
              disabled={step == 1}
              onClick={() => setStep(step - 1)}
              className="remittance-process-button back"
            >
              regresar
            </button>

            {/* Botón para avanzar */}
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
