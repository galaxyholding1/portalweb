import { Link } from "react-router";
import "./Card.css";
import { CardHeader } from "./CardHeader/CardHeader";

export const Card = ({children, icon, title, morePath, className}) => {

  return (
    <div className={`card-container ${className ? className : ""}`}>
      <CardHeader icon={icon} title={title} morePath={morePath} />
      <div className="card-content">
        { children }
      </div>
    </div>
  );
};
