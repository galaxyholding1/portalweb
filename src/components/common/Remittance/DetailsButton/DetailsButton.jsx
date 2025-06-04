// Importa el componente Icon desde la ruta relativa
import { Icon } from "../../ui/Icon/Icon";

// Importa los estilos CSS específicos para este botón
import "./DetailsButton.css";

// Componente funcional que representa un botón con ícono y texto
export const DetailsButton = () => {
  return (
    // (ver DetailsButton.css)
    <button className="details-button">
      {/* ícono menos */}
      <Icon name="minus_icon"/>
      detalles
    </button>
  );
};
