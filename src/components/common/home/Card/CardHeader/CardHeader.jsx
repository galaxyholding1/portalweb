import { Link } from "react-router";

export const CardHeader = ({ icon, title, morePath }) => {
  return (
    <span className="card-header">
      <div>
        {icon}
        <h3>{title}</h3>
      </div>
      {morePath && <Link to={morePath}>Ver más</Link>}
    </span>
  );
};
