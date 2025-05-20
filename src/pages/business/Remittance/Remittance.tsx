import { MovementCard } from "../../../components/common/home/MovementCard/MovementCard";
import { TransfersCard } from "../../../components/common/home/MyRequestsCard/TransfersCard";
import { RemittanceForm } from "../../../components/common/home/Remittances/RemittanceForm";
import { RemittanceSend } from "../../../components/common/home/Remittances/RemittanceSend";
import { RemittancesGrid } from "../../../components/common/home/RemittancesCard/RemittancesGrid";
import "./Remittance.css";

export const Remittance = () => {
  return (
    <div className="grid-remittance">
      <RemittancesGrid />
      <MovementCard stateIndicator />
    </div>
  );
};
