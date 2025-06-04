import { Formatter } from "../../../../util/formatter";
import "./movements.css";
import { Icon } from "../../ui/Icon/Icon";
import { useNavigate } from "react-router";
import { StateIndicator } from "./StateIndicator/StateIndicator";

// Tarjeta completa para reutilizar como componente en MovementsCard
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
  // Retorno de la lógica que se usa para generar el item
  return (
    <div className="movement-item">
      <div className="movement-item-icon">
        {/* Importación del ícono */}
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
          {/* Importación del ícono */}
          <Icon name="note_search" alt="" />
        </div>
      )}
      {stateIndicator && (
        // Indicador de estado
        <StateIndicator state={state} />
      )}

      <div className="movement-item-amount">
        {Formatter.formatCurrency(amount)}
      </div>
    </div>
  );
};
