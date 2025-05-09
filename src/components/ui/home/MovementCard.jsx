import { Card } from "./Card";
import { MovementItem } from "./movements/movementItem";
// import "./home.css";

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
        icon={"icon"}
        morePath={`/${screenType}/movements`}
      >
        {movements.map((mov) => (
          <MovementItem {...mov} />
        ))}
      </Card>
    </div>
  );
};
