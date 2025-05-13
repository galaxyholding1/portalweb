import { Card } from "../Card/Card";
import { MovementItem } from "../movements/movementItem";
import setup from "../../../assets/images/SVG/setup.svg";

const movements = [
  { 
    conceptTitle: "Airbnb", 
    date: new Date("2025-05-01T15:00:00"), 
    amount: 100 
  },
  { 
    conceptTitle: "Airbnb", 
    date: new Date("2025-05-01T15:00:00"), 
    amount: 100 
  },
  { 
    conceptTitle: "Airbnb", 
    date: new Date("2025-05-01T15:00:00"), 
    amount: 100 
  },
  { 
    conceptTitle: "Airbnb", 
    date: new Date("2025-05-01T15:00:00"), 
    amount: 100 
  },
];

export const MovementCard = () => {
  const screenType = "people"; // "Business"
  return (
    <div className="grid-area-movements">
      <Card
        title="Ultimos movimientos"
        icon={<img src={setup}/>}
        morePath={`/${screenType}/movements`}
      >
        {movements.map((mov, i) => (
          <MovementItem key={`${mov.conceptTitle}${i}`} {...mov} />
        ))}
      </Card>
    </div>
  );
};
