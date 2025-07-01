import React from "react";

// Componente que muestra información resumida de la remesa
import { RemmitanceConfirmationItem } from "../../../../components/common/home/RemmitanceConfirmationItem/RemmitanceConfirmationItem";

// Advertencia o mensaje importante antes de continuar
import { ConfirmationWarning } from "../../../../components/common/Remittance/ConfirmationWarning/ConfirmationWarning";

// Componente de revisión y confirmación del monto antes de enviar la remesa
export const AmountConfirmation = () => {
  return (
    <div className="remittance-step-container">
      {/* Título principal del paso */}
      <h1>Revision y Confirmación</h1>

      {/* Card con detalles de la transacción */}
      <RemmitanceConfirmationItem large />

      {/* Mensaje de advertencia o confirmación extra */}
      <ConfirmationWarning />
    </div>
  );
};
