import { MovementCard } from "../../../components/common/home/MovementCard/MovementCard";
import { TransfersCard } from "../../../components/common/home/MyRequestsCard/TransfersCard";
import { RemittanceForm } from "../../../components/common/home/Remittances/RemittanceForm";

import { RemittancesGrid } from "../../../components/common/home/RemittancesCard/RemittancesGrid";
import { LastConsignment } from "../../../components/common/home/RemittancesCard/LastConsignment";

export const Remittance = () => {
  return (
    <div className="dashboard-grid">
      <RemittancesGrid />
      <div className="grid-area-applications">
        <MovementCard stateIndicator />
        <LastConsignment />
      </div>
    </div>
  );
};
