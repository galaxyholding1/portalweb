import { RemittancesGrid } from "../../../components/common/home/RemittancesCard/RemittancesGrid";
import { RemittanceListPreview } from "../../../components/common/home/Remittances/RemittanceList/RemittanceListPreview";

// This section calls the different components to display them on the page
export const RemittancePeople = () => {
  return (
    <div className="dashboard-grid">
      <RemittancesGrid />
      <RemittanceListPreview/>
    </div>
  );
};