import { CardSelect } from "../../components/common/home/Card/CardSelect";
import { MovementDetail } from "../../components/common/home/movements/MovementDetail/MovementDetail";
import { MovementItem } from "../../components/common/home/movements/movementItem";
import { RemittanceTransaction } from "../../components/common/Remittance/RemittanceTransaction/RemittanceTransaction";
import { Icon } from "../../components/common/ui/Icon/Icon";
import "./MovementView.css";

export const MovementView = () => {
  return (
    <div>
      {/* Main card with title and icon */}
      <CardSelect
        title={"Detalle de movimientos"}
        icon={<Icon name="moving_desk" />}
      >
        {/* Example of an individual movement (can render multiple dynamically) */}
        <MovementItem amount={4000} conceptTitle="Airbnb" date={new Date()} />

        {/* Detailed transaction section (date, user, status, etc.) */}
        <RemittanceTransaction />

        {/* Available actions: download PDF or print */}
        <div className="actions-movement-container">
          <button className="button-portal">
            <Icon name="pdf_icon" color="white" />
            Descargar PDF
          </button>
          <button className="button-portal">
            <Icon name="printer" color="white" />
            Imprimir
          </button>
        </div>
      </CardSelect>
    </div>
  );
};
