import React from "react";
import { SimpleCard } from "../../../../components/common/home/Card/SimpleCard/SimpleCard";
import { CardHeader } from "../../../../components/common/home/Card/CardHeader/CardHeader";
import { ContactHeader } from "../../../../components/common/contact/ContactHeader/ContactHeader";
import { SaveButton } from "../../../../components/common/ui/Button/SaveButton";
import { CardMoments } from "../../../../components/common/home/Card/CardMoments";
import { MovementView } from "../../MovementView";
import { RemittanceTransaction } from "../../../../components/common/Remittance/RemittanceTransaction/RemittanceTransaction";
import { Button } from "../../../../components/common/ui/Button/Button";
import { Icon } from "../../../../components/common/ui/Icon/Icon";
import { DetailsButton } from "../../../../components/common/Remittance/DetailsButton/DetailsButton";

export const RemittanceDetail = () => {
  return (
    <SimpleCard className="remittance-detail-container">
      <div className="remittance-detail-header">
        <ContactHeader />
        <h1>Monto: 80,00 VEF</h1>
        <Icon name="bdgeOk" width={25} />
      </div>
      <RemittanceTransaction />
      <DetailsButton />
      <Button
        icon={<Icon name="printer" />}
        className="remittance-detail-button"
      >
        Descargar PDF
      </Button>
    </SimpleCard>
  );
};
