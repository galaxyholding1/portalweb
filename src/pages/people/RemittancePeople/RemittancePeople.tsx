import { MovementCard } from "../../../components/common/home/MovementCard/MovementCard";
import { TransfersCard } from "../../../components/common/home/MyRequestsCard/TransfersCard";
import { RemittanceForm } from "../../../components/common/home/Remittances/RemittanceForm";
import { RemittanceSend } from "../../../components/common/home/Remittances/RemittanceSend";

export const RemittancePeople = () => {
  return (
    <div className="dashboard-grid">
      <RemittanceSend />
      <div>
        <MovementCard stateIndicator/>
        <TransfersCard />
      </div>
    </div>
  );
};
