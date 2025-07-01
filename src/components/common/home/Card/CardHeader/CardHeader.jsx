import { Link } from "react-router";
import { Icon } from "../../../ui/Icon/Icon";

export const CardHeader = ({ icon, title, morePath }) => {
  // TODO: The colors are not correct in dark mode.
  return (
    <div className="card-header-container">
      <div className="card-header-box">
        <div className="header-title">
          {icon}
          <h3>{title}</h3>
        </div>
      </div>

      {/* Renders the "view more" link only if 'morePath' is provided. */}
      {morePath && (
        <Link to={morePath} className="card-header-link">
          <Icon name="ver_mas_icon" alt="ver-mas" className="ver-mas-icon" />
          ver más
        </Link>
      )}
    </div>
  );
};