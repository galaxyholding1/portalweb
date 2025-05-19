import { MovementCard } from "../../../components/common/home/MovementCard/MovementCard";
import { TransfersCard } from "../../../components/common/home/MyRequestsCard/TransfersCard";
import { RemittanceForm } from "../../../components/common/home/Remittances/RemittanceForm";
import { RemittanceSend } from "../../../components/common/home/Remittances/RemittanceSend";
import './Remittance.css'

export const Remittance = () => {
  return (
    <div className="grid-remittance">
      <RemittanceForm  />
      <MovementCard stateIndicator/>
      <TransfersCard />
    </div>
  );
};
