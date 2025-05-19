import { CardMoments } from "../Card/CardMoments";
import { MovementsItem } from "../movements/MovementsItem";
import { Card } from "../Card/Card";
import { getPathByClient } from "../../../../util/getModeClient";
import { useLocation } from "react-router";
import { Icon } from "../../ui/Icon/Icon";

const movements = [
  {
    conceptTitle: "Airbnb",
    date: new Date("2025-05-01T15:00:00"),
    amount: 100,
  },
  {
    conceptTitle: "Airbnb",
    date: new Date("2025-05-01T15:00:00"),
    amount: 100,
  },
  {
    conceptTitle: "Airbnb",
    date: new Date("2025-05-01T15:00:00"),
    amount: 100,
  },
  {
    conceptTitle: "Airbnb",
    date: new Date("2025-05-01T15:00:00"),
    amount: 100,
  },
  {
    conceptTitle: "Airbnb",
    date: new Date("2025-05-01T15:00:00"),
    amount: 100,
  },
  {
    conceptTitle: "Airbnb",
    date: new Date("2025-05-01T15:00:00"),
    amount: 100,
  },
  {
    conceptTitle: "Airbnb",
    date: new Date("2025-05-01T15:00:00"),
    amount: 100,
  },
  {
    conceptTitle: "Airbnb",
    date: new Date("2025-05-01T15:00:00"),
    amount: 100,
  },
];

export const MovementCard = ({ filter = false, stateIndicator = false, enableLink = false }) => {
  const CardComponent = filter ? CardMoments : Card;
  const { pathname } = useLocation();
  return (
    <div className="grid-area-movements">
      <CardComponent
        title="Ultimos movimientos"
        icon={<Icon name="setup" />}
        morePath={`${getPathByClient(pathname)}/movimientos`}
      >
        {movements.map((mov, i) => (
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
