import { MovementCard } from "../../../components/common/home/MovementCard/MovementCard";
import { TransfersCard } from "../../../components/common/home/MyRequestsCard/TransfersCard";
import { RemittanceForm } from "../../../components/common/home/Remittances/RemittanceForm";
import { RemittanceSend } from "../../../components/common/home/Remittances/RemittanceSend";
import { RemittancesGrid } from "../../../components/common/home/RemittancesCard/RemittancesGrid";
import { LastConsignment } from "../../../components/common/home/RemittancesCard/LastConsignment";
import { RemittanceFilterM } from "../../../components/common/home/RemittanceFilter/RemittanceFilterM";

import "./Remittance.css";

export const Remittance = () => {
  return (
    <div className="dashboard-grid">
      <RemittanceFilterM />
      <div className="grid-area-applications">
        <MovementCard stateIndicator />
        <LastConsignment />
      </div>
    </div>
  );
};
