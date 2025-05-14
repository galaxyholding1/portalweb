import { CardMoments } from "../Card/CardMoments";
import { MovementsItem } from "../movements/MovementsItem";
import setup from "../../../assets/images/SVG/setup.svg";

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

export const MovementCard = () => {
  const screenType = "people"; // "Business"
  return (
    <div className="grid-area-movements">
      <CardMoments
        title="Ultimos movimientos"
        icon={<img src={setup} />}
        morePath={`/${screenType}/movements`}
      >
        {movements.map((mov, i) => (
          <MovementsItem key={`${mov.conceptTitle}${i}`} {...mov} />
        ))}
      </CardMoments>
    </div>
  );
};
