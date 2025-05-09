import { Link } from "react-router";
import "./Card.css";

export const Card = ({children, icon, title, morePath}) => {
  return (
    <div className="card-container">
      <span className="card-header">
        <div>
          {icon}
          <h3>{title}</h3>
        </div>
        <Link to={morePath}>Ver más</Link>
      </span>
      <div className="card-content">
        { children }
      </div>
    </div>
  );
};
