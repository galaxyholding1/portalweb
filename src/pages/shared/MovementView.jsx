import { CardSelect } from "../../components/common/home/Card/CardSelect";
import { MovementDetail } from "../../components/common/home/movements/MovementDetail/MovementDetail";
import { MovementItem } from "../../components/common/home/movements/movementItem";
import { RemittanceTransaction } from "../../components/common/Remittance/RemittanceTransaction/RemittanceTransaction";
import { Icon } from "../../components/common/ui/Icon/Icon";
import "./MovementView.css";



export const MovementView = () => {
  return (
    <div>
      <CardSelect
        title={"Detalle de movimientos"}
        icon={<Icon name="moving_desk" />}
      >
        <MovementItem amount={4000} conceptTitle="Airbnb" date={new Date()} />

        <RemittanceTransaction/>

           <div className="actions-movement-container">
          <button className="button-portal">
            <Icon
              name="save"
              color="white"
            />
            Descargar PDF
          </button>
          <button className="button-portal">
            <Icon
              name="printer"
              color="white"
            />
            Imprimir
          </button>
        </div>
       

       
      </CardSelect>
    </div>
  );
};
