import { Formatter } from "../../../../util/formatter";
import "./movements.css";
import { Icon } from "../../ui/Icon/Icon";
import { useNavigate } from "react-router";

export const MovementsItem = ({ amount, conceptTitle, date, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/portal-empresas/movimientos/1`);
    {
      /**movimientos/${id} */
    }
  };

  return (
    <div className="movement-item">
      <div className="movement-item-icon">
        <Icon name="money" color="white"/>
      </div>
      <div className="movement-item-details">
        <p>{conceptTitle}</p>
        <span>{Formatter.formatDate(date)}</span>
      </div>
      <div
        className="movement-item-amount-icon"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <Icon name='note_search' alt="" />
      </div>

      <div className="movement-item-amount">
        {Formatter.formatCurrency(amount)}
      </div>
    </div>
  );
};
