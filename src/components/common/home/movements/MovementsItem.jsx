import { Formatter } from "../../../../util/formatter";
import MoneyIcon from "../../../../assets/icons/money.svg";
import note_search from "../../../../assets/icons/note_search.svg";
import { useNavigate } from "react-router-dom";
import "./movements.css";

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
        <img src={MoneyIcon} alt="" />
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
        <img src={note_search} alt="" />
      </div>

      <div className="movement-item-amount">
        {Formatter.formatCurrency(amount)}
      </div>
    </div>
  );
};
