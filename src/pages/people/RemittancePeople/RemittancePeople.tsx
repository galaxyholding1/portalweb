import { MovementCard } from "../../../components/common/home/MovementCard/MovementCard";
import { RemittancesGrid } from "../../../components/common/home/RemittancesCard/RemittancesGrid";

import { LastConsignment } from "../../../components/common/home/RemittancesCard/LastConsignment";
import { RemittanceFilterListModal } from "../../../components/common/home/RemittanceFilter/RemittanceFilterListModal";
import { RemittanceList } from "../../../components/common/home/Remittances/RemittanceList/RemittanceList";
import { RemittanceListPreview } from "../../../components/common/home/Remittances/RemittanceList/RemittanceListPreview";
export const RemittancePeople = () => {
  return (
    <div className="dashboard-grid">
      <RemittancesGrid />
      <RemittanceListPreview/>
    </div>
  );
};
