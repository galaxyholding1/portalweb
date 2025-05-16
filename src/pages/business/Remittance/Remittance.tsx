import { MovementCard } from "../../../components/common/home/MovementCard/MovementCard";
import { TransfersCard } from "../../../components/common/home/MyRequestsCard/TransfersCard";
import { RemittanceForm } from "../../../components/common/home/Remittances/RemittanceForm";
import { RemittanceSend } from "../../../components/common/home/Remittances/RemittanceSend";

export const Remittance = () => {
  return (
    <div className="dashboard-grid">
      <RemittanceForm  />
      <div>
        <MovementCard />
        <TransfersCard />
      </div>
    </div>
  );
};
