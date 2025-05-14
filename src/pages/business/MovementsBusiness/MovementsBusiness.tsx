
import { MovementCard } from "../../../components/common/home/MovementCard/MovementCard";
import "./MovementsBusiness.css";

export const MovementsBusiness = () => {
  return (
    <div className="movements-page-container">
      <MovementCard filter/>
      <MovementCard filter/>
    </div>
  );
};
