import { useLocation } from "react-router";
import { Icon } from "../../ui/Icon/Icon";
import { Card } from "../Card/Card";
import { MovementItem } from "../movements/movementItem";
import { getPathByClient } from "../../../../util/getModeClient";

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
];

export const MovementCardPreview = () => {
  const { pathname } = useLocation();
  return (
    <div className="grid-area-movements">
      <Card
        title="últimos movimientos"
        icon={<Icon name="moving_desk" />}
        morePath={`${getPathByClient(pathname)}/movimientos`}
      >
        {movements.map((mov, i) => (
          <MovementItem key={`${mov.conceptTitle}${i}`} {...mov} />
        ))}
      </Card>
    </div>
  );
};
