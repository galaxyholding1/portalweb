import "./RemittanceList.css";
import { Icon } from "../../../ui/Icon/Icon";
import { LastRemittancesCard } from "../../RemittancesCard/LastRemittancesCard";
import { Input } from "../../../Remittance/Input/Input";
import { useState } from "react";
import { RemittanceFilterListModal } from "../../RemittanceFilter/RemittanceFilterListModal";

// Example contact data used to simulate remittance cards
const contact = {
  id: 3,
  user: "https://flagcdn.com/us.svg",
  name: "Laura Gómez",
  business: "Tienda La Esquina",
  initials: "LG",
  flagUrl: "https://flagcdn.com/mx.svg",
  price: 1000,
  date: "2023-10-01",
  state: true,
};

/**
 * RemittanceListPreview component renders a preview version of the remittance list
 * with search functionality, filter modal, and quick access to additional options.
 */
export const RemittanceListPreview = () => {
  // Modal state to control visibility of the filter modal
  const [isOpenModalFilter, setIsOpenModalFilter] = useState(false);

  // Opens the filter modal
  const handleOpenFilter = () => {
    setIsOpenModalFilter(true);
  };

  return (
    <>
      {/* Filter modal component */}
      <RemittanceFilterListModal
        onClose={() => setIsOpenModalFilter(false)}
        visible={isOpenModalFilter}
      />

      <div className="remittance-list-container">
        <h1 className="mini">Listado de remesas</h1>
        <hr />

        {/* Filter section with search and actions */}
        <div className="remittance-list-filters">
          <Input type="text" icon={<Icon name="search" />} />

          <button onClick={handleOpenFilter}>
            <Icon name="slider" color="white" /> Filtrar por
          </button>

          <button onClick={handleOpenFilter} className="link">
            <Icon name="add_plus_circle" /> ver más
          </button>
        </div>

        {/* Render remittance cards */}
        <div className="remittance-list-result">
          {Array.from({ length: 7 }, (_, i) => (
            <LastRemittancesCard
              data={contact}
              key={i}
              showState
              showStateIcon={false}
              className="remittance-list-card"
            />
          ))}
        </div>
      </div>
    </>
  );
};
