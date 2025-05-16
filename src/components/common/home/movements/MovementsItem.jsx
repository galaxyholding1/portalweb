import { Formatter } from "../../../../util/formatter";
import "./movements.css";
import { Icon } from "../../ui/Icon/Icon";
import { useNavigate } from "react-router";

const statesById = {
  cancelled: "Cancelado",
  sucess: "Confirmado",
  pending: "En proceso",
};

export const MovementsItem = ({
  id,
  amount,
  conceptTitle,
  date,
  /* parametros booleanos */
  linkToDetail,
  stateIndicator,
}) => {
  const navigate = useNavigate();

  const handleClickNavigate = () => {
    navigate(`/portal-empresas/movimientos/1`);
    {
      /**movimientos/${id} */
    }
  };

  const state = "sucess";

  console.log(statesById[state]);
  return (
    <div className="movement-item">
      <div className="movement-item-icon">
        <Icon name="money" color="white" />
      </div>
      <div className="movement-item-details">
        <p>{conceptTitle}</p>
        <span>{Formatter.formatDate(date)}</span>
      </div>
      {linkToDetail && (
        <div
          className="movement-item-amount-icon"
          onClick={handleClickNavigate}
          style={{ cursor: "pointer" }}
        >
          <Icon name="note_search" alt="" />
        </div>
      )}
      {stateIndicator && (
        <span className={`state-indicator state-${state}`}>
          {statesById[state]}
        </span>
      )}

      <div className="movement-item-amount">
        {Formatter.formatCurrency(amount)}
      </div>
    </div>
  );
};
