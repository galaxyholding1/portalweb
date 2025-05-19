import { MovementCard } from "../../../components/common/home/MovementCard/MovementCard";
import { TransfersCard } from "../../../components/common/home/MyRequestsCard/TransfersCard";
import { RemittanceForm } from "../../../components/common/home/Remittances/RemittanceForm";

export const Remittance = () => {
  return (
    <div className="dashboard-grid">
      <RemittanceForm  />
      <div>
        <MovementCard stateIndicator/>
        <TransfersCard />
      </div>
    </div>
  );
};
