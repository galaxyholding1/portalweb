import { Link } from "react-router";
import "./Card.css";
import { MovementsHeader } from "./CardHeader/MovementsHeader";

export const CardMoments = ({ children, icon, title, morePath, className }) => {

  return (
    <div className={`card-container ${className ? className : ""}`}>
      <MovementsHeader icon={icon} title={title} morePath={morePath} />
      <div className="card-content">{children}</div>
    </div>
  );
};
