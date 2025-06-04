import React from "react";

// Tarjeta con resumen del contacto y monto enviado
import { RemittanceConfirmation } from "../../../../components/common/Remittance/RemittanceConfirmation/RemittanceConfirmation";

// Ítem de confirmación que muestra datos clave del envío (puede ser clickeable)
import { RemmitanceConfirmationItem } from "../../../../components/common/home/RemmitanceConfirmationItem/RemmitanceConfirmationItem";

// Componente que representa la vista final tras una transacción exitosa
export const TransactionResult = ({ handlerContinue }) => {
  return (
    <div className="remittance-step-container">
      <h1>Reporte</h1>

      <div className="result-container">
        {/* Resumen visual del envío completado */}
        <RemittanceConfirmation />

        {/* Detalles adicionales y posible acción (continuar) */}
        <RemmitanceConfirmationItem large onClick={handlerContinue} />
      </div>
    </div>
  );
};
