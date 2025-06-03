import { MovementCard } from "../../../components/common/home/MovementCard/MovementCard";
import { RemittanceForm } from "../../../components/common/home/Remittances/RemittanceForm";
import { LastConsignment } from "../../../components/common/home/RemittancesCard/LastConsignment";

import "./Remittance.css";

export const Remittance = () => {
  return (
    <div className="dashboard-grid">
      <RemittanceForm/>
      <div className="grid-area-applications">
        <MovementCard stateIndicator />
        <LastConsignment />
      </div>
    </div>
  );
};
