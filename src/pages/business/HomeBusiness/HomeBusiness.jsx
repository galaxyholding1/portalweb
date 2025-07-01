/**
 * @fileoverview Main dashboard component for the business portal
 * @requires react
 */
// Import dashboard card components
import { BalanceCard } from "../../../components/common/home/BalanceCard/BalanceCard";
import { MovementCard } from "../../../components/common/home/MovementCard/MovementCard";
import { MovementCardPreview } from "../../../components/common/home/MovementCardPreview/MovementCardPreview";
import { RequestsCard } from "../../../components/common/home/MyRequestsCard/RequestsCard";
import { TransfersCard } from "../../../components/common/home/MyRequestsCard/TransfersCard";
// Import styles shared with the people's version
import "../../people/HomePeople/HomePeople.css";

/**
 * HomeBusiness Component
 *
 * @component
 * @description Renders the main dashboard of the business portal.
 * This dashboard displays a comprehensive summary of the user's financial
 * and transactional information, organized into different informative cards.
 *
 * The layout of the elements is controlled by CSS Grid via
 * the 'dashboard-grid' class for an organized and responsive presentation.
 *
 * @returns {JSX.Element} Dashboard with multiple informative cards
 */
export const HomeBusiness = () => {
  return (
    <div className="dashboard-grid">
      {/* Card showing main balance and financial information */}
      <BalanceCard />

      {/* Preview of recent movements and transactions */}
      <MovementCardPreview />

      {/* Container for applications and transfers cards */}
      <div className="grid-area-applications">
        {/* Card showing pending requests */}
        <RequestsCard />
        {/* Card showing transfer history */}
        <TransfersCard />
      </div>
    </div>
  );
};