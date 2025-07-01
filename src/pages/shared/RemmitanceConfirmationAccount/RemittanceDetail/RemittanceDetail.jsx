import React from "react";

// Tarjeta contenedora general
import { SimpleCard } from "../../../../components/common/home/Card/SimpleCard/SimpleCard";

// Header con información del contacto (avatar, nombre, etc.)
import { ContactHeader } from "../../../../components/common/contact/ContactHeader/ContactHeader";

// Componente con la información detallada de la remesa (fecha, usuario, estado, etc.)
import { RemittanceTransaction } from "../../../../components/common/Remittance/RemittanceTransaction/RemittanceTransaction";

// Botón personalizado reutilizable
import { Button } from "../../../../components/common/ui/Button/Button";

// Íconos SVG reutilizables
import { Icon } from "../../../../components/common/ui/Icon/Icon";

// Botón para mostrar más detalles (por ejemplo, colapsar información)
import { DetailsButton } from "../../../../components/common/Remittance/DetailsButton/DetailsButton";

// Vista detallada de una remesa realizada
export const RemittanceDetail = () => {
  return (
    <SimpleCard className="remittance-detail-container">
      {/* Encabezado con datos del contacto y estado */}
      <div className="remittance-detail-header">
        <ContactHeader />
        <h1>Monto: 80,00 VEF</h1>
        <Icon name="bdgeOk" width={25} />
      </div>

      {/* Información general de la transacción */}
      <RemittanceTransaction />

      {/* Botón para mostrar más detalles */}
      <DetailsButton />

      {/* Botón para exportar la remesa en PDF */}
      <Button
        icon={<Icon name="pdf_icon" />}
        className="remittance-detail-button"
      >
        Descargar PDF
      </Button>
    </SimpleCard>
  );
};
