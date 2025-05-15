import { Link } from "react-router";
import verMas from "../../../../../assets/icons/ver_mas_icon.svg"

export const CardHeader = ({ icon, title, morePath }) => {
  return (
    <div className="card-header-container">
      <div className="card-header-box">
        <div className="header-title">
          {icon}
          <h3>{title}</h3>
        </div>
      </div>
      
      {morePath && (
        <Link to={morePath} className="card-header-link">
          <img src={verMas} alt="ver-mas" className="ver-mas-icon" />,
          Ver más
        </Link>
      )}
    </div>
  );
};

