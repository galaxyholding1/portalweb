/**
 * @fileoverview Componente que muestra la página de movimientos para el portal de negocios
 * @module MovementsBusiness
 */

// Importación del componente de tarjeta de movimientos
import { MovementCard } from "../../../components/common/home/MovementCard/MovementCard";
// Importación de estilos específicos del componente
import "./MovementsBusiness.css";

/**
 * Componente que renderiza la página de movimientos
 * Muestra dos tarjetas de movimientos con capacidad de filtrado y navegación
 * @returns {JSX.Element} Página de movimientos con dos tarjetas de movimientos
 */
export const MovementsBusiness = () => {
  return (
    <div className="movements-page-container">
      {/* Primera tarjeta de movimientos con filtro y enlace habilitado */}
      <MovementCard filter enableLink totalItems={8} />
      {/* Segunda tarjeta de movimientos con filtro y enlace habilitado */}
      <MovementCard filter enableLink totalItems={8} />
    </div>
  );
};
