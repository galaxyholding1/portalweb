import React from "react";
// General container card
import { SimpleCard } from "../../../../components/common/home/Card/SimpleCard/SimpleCard";
// Header with contact information (avatar, name, etc.)
import { ContactHeader } from "../../../../components/common/contact/ContactHeader/ContactHeader";
// Component with detailed remittance information (date, user, status, etc.)
import { RemittanceTransaction } from "../../../../components/common/Remittance/RemittanceTransaction/RemittanceTransaction";
// Reusable custom button
import { Button } from "../../../../components/common/ui/Button/Button";
// Reusable SVG icons
import { Icon } from "../../../../components/common/ui/Icon/Icon";
// Button to show more details (e.g., collapse information)
import { DetailsButton } from "../../../../components/common/Remittance/DetailsButton/DetailsButton";

// Detailed view of a completed remittance
export const RemittanceDetail = () => {
  return (
    <SimpleCard className="remittance-detail-container">
      {/* Header with contact data and status */}
      <div className="remittance-detail-header">
        <ContactHeader />
        <h1>Monto: 80,00 VEF</h1>
        <Icon name="bdgeOk" width={25} />
      </div>

      {/* General transaction information */}
      <RemittanceTransaction />

      {/* Button to show more details */}
      <DetailsButton />

      {/* Button to export the remittance as PDF */}
      <Button
        icon={<Icon name="pdf_icon" />}
        className="remittance-detail-button"
      >
        Descargar PDF
      </Button>
    </SimpleCard>
  );
};
