// Imports the MovementCard component from its relative path
import { MovementCard } from "../../../components/common/home/MovementCard/MovementCard";
// Imports the RemittanceForm component from its relative path
import { RemittanceForm } from "../../../components/common/home/Remittances/RemittanceForm";
// Imports the LastConsignment component from its relative path
import { LastConsignment } from "../../../components/common/home/RemittancesCard/LastConsignment";
// Imports the specific CSS styles for the Remittance component
import "./Remittance.css";

// Defines and exports the functional component Remittance
export const Remittance = () => {
  return (
    // Main container with CSS class that defines the grid structure
    <div className="dashboard-grid">
      {/* Renders the remittance form */}
      <RemittanceForm />

      {/* Secondary container to display related applications */}
      <div className="grid-area-applications">
        {/* Renders the MovementCard component with a prop called stateIndicator */}
        <MovementCard stateIndicator />

        {/* Renders the component that displays the last consignment */}
        <LastConsignment />
      </div>
    </div>
  );
};