import { RemittancesGrid } from "../../../components/common/home/RemittancesCard/RemittancesGrid";
import { RemittanceListPreview } from "../../../components/common/home/Remittances/RemittanceList/RemittanceListPreview";

// En este apartado se llama a los distintos componentes para mostrarlos en la página
export const RemittancePeople = () => {
  return (
    <div className="dashboard-grid">
      <RemittancesGrid />
      <RemittanceListPreview/>
    </div>
  );
};