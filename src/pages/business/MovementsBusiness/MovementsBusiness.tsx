
import { MovementCard } from "../../../components/common/home/MovementCard/MovementCard";
import "./MovementsBusiness.css";

export const MovementsBusiness = () => {
  return (
    <div className="movements-page-container">
      <MovementCard filter enableLink totalItems={8}/>
      <MovementCard filter enableLink totalItems={8}/>
    </div>
  );
};
