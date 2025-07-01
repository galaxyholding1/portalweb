/**
 * @fileoverview Component that displays the movements page for the business portal
 * @module MovementsBusiness
 */

// Importation of the movement card component
import { MovementCard } from "../../../components/common/home/MovementCard/MovementCard";
// Importation of component-specific styles
import "./MovementsBusiness.css";

/**
 * Component that renders the movements page
 * Displays two movement cards with filtering and navigation capabilities
 * @returns {JSX.Element} Movements page with two movement cards
 */
export const MovementsBusiness = () => {
  return (
    <div className="movements-page-container">
      {/* First movement card with filter and link enabled */}
      <MovementCard filter enableLink totalItems={8} />
      {/* Second movement card with filter and link enabled */}
      <MovementCard filter enableLink totalItems={8} />
    </div>
  );
};