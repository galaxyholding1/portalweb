import { CardMoments } from "../Card/CardMoments";
import { MovementsItem } from "../movements/MovementsItem";
import { Card } from "../Card/Card";
import { getPathByClient } from "../../../../util/getModeClient";
import { useLocation } from "react-router";
import { Icon } from "../../ui/Icon/Icon";

// Carta de movimientos completa llamando a diferentes componentes 
export const MovementCard = ({ filter = false, stateIndicator = false, enableLink = false, totalItems = 4 }) => {
  const movements = Array.from({ length: totalItems }, () => ({
    conceptTitle: "Airbnb",
    date: new Date("2025-05-01T15:00:00"),
    amount: 100,
  }));
  const CardComponent = filter ? CardMoments : Card;
  const { pathname } = useLocation();
  return (
    <div className="grid-area-movements">
      <CardComponent
        title="Movimientos" 
        icon={<Icon name="moving_desk" />}
        morePath={`${getPathByClient(pathname)}/movimientos`}
      >
        {movements.map((mov, i) => (
          // Componente de los items de movimientos
          <MovementsItem
            key={`${mov.conceptTitle}${i}`}
            {...mov}
            stateIndicator={stateIndicator}
            linkToDetail={enableLink}
          />
        ))}
      </CardComponent>
    </div>
  );
};
