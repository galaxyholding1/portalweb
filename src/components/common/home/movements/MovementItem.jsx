import { Formatter } from "../../../../util/formatter"
import "./movements.css";
import { Icon } from "../../ui/Icon/Icon";

// Apartado de los items de los movimientos con su respectivo ícono y el formato de la fecha
export const MovementItem = ({ amount, conceptTitle, date }) => {
  return (
    <div className="movement-item">
      <div className="movement-item-icon">
        <Icon name="money" color="white"/>
      </div>
      <div className="movement-item-details">
        <p>{conceptTitle}</p>
        <span>{Formatter.formatDate(date)}</span>
      </div>
      <div className="movement-item-amount">
        {Formatter.formatCurrency(amount)}
      </div>
    </div>
  );
};
