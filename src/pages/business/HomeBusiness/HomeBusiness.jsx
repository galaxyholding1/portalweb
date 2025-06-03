/**
 * @fileoverview Componente del dashboard principal para el portal de negocios
 * @requires react
 */

// Importación de componentes de tarjetas para el dashboard
import { BalanceCard } from "../../../components/common/home/BalanceCard/BalanceCard";
import { MovementCard } from "../../../components/common/home/MovementCard/MovementCard";
import { MovementCardPreview } from "../../../components/common/home/MovementCardPreview/MovementCardPreview";
import { RequestsCard } from "../../../components/common/home/MyRequestsCard/RequestsCard";
import { TransfersCard } from "../../../components/common/home/MyRequestsCard/TransfersCard";

// Importación de estilos compartidos con la versión de personas
import "../../people/HomePeople/HomePeople.css";

/**
 * Componente HomeBusiness
 *
 * @component
 * @description Renderiza el dashboard principal del portal de negocios.
 * Este dashboard muestra un resumen completo de la información financiera
 * y transaccional del usuario, organizado en diferentes tarjetas informativas.
 *
 * La disposición de los elementos se controla mediante CSS Grid a través
 * de la clase 'dashboard-grid' para una presentación organizada y responsive.
 *
 * @returns {JSX.Element} Dashboard con múltiples tarjetas informativas
 */
export const HomeBusiness = () => {
  return (
    <div className="dashboard-grid">
      {/* Tarjeta que muestra el saldo y la información financiera principal */}
      <BalanceCard />

      {/* Vista previa de los movimientos y transacciones recientes */}
      <MovementCardPreview />

      {/* Contenedor para las tarjetas de aplicaciones y transferencias */}
      <div className="grid-area-applications">
        {/* Tarjeta que muestra las solicitudes pendientes */}
        <RequestsCard />
        {/* Tarjeta que muestra el historial de transferencias */}
        <TransfersCard />
      </div>
    </div>
  );
};
