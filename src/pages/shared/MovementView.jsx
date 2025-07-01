import { CardSelect } from "../../components/common/home/Card/CardSelect";
import { MovementDetail } from "../../components/common/home/movements/MovementDetail/MovementDetail";
import { MovementItem } from "../../components/common/home/movements/movementItem";
import { RemittanceTransaction } from "../../components/common/Remittance/RemittanceTransaction/RemittanceTransaction";
import { Icon } from "../../components/common/ui/Icon/Icon";
import "./MovementView.css";

export const MovementView = () => {
  return (
    <div>
      {/* Tarjeta principal con título e ícono */}
      <CardSelect
        title={"Detalle de movimientos"}
        icon={<Icon name="moving_desk" />}
      >
        {/* Ejemplo de movimiento individual (puedes renderizar varios dinámicamente) */}
        <MovementItem amount={4000} conceptTitle="Airbnb" date={new Date()} />

        {/* Sección detallada de la transacción (fecha, usuario, estado, etc.) */}
        <RemittanceTransaction />

        {/* Acciones disponibles: descargar PDF o imprimir */}
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
