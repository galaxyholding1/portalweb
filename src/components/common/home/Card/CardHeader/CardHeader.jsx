import { Link } from "react-router";
import { Icon } from "../../../ui/Icon/Icon";

export const CardHeader = ({ icon, title, morePath }) => {
  // TODO: LOS COLORES NO ESTÁN BIEN EN DARK
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
          <Icon name="ver_mas_icon" alt="ver-mas" className="ver-mas-icon" />
          ver más
        </Link>
      )}
    </div>
  );
};

