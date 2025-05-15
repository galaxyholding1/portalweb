import { Link } from "react-router";

export const CardHeader = ({ icon, title, morePath }) => {
  return (
    <div> 
      {/* card-header-container como clase y debe 
      ocupar todo el espacio y alinear horizontalmente 
      los dos elementos. pista flex*/}
      <span className="card-header" > {/* este contenedor debe tener el 100% si viene morePath, sino 70% */}
        <div>
          {icon}
          <h3>{title}</h3>
        </div>
      </span>
      {morePath && <Link to={morePath}>Ver más</Link>} {/* Este link debe ser un botón con el estilo */}
    </div>
  );
};
