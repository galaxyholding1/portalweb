import { Formatter } from "../../../../util/formatter"
import "./movements.css";
import { Icon } from "../../ui/Icon/Icon";

export const MovementItem = ({ amount, conceptTitle, date }) => {
  return (
    <div className="movement-item">
      <div className="movement-item-icon">
        <Icon name="money" />
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
