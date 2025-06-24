import "./RemittanceList.css";
import { Icon } from "../../../ui/Icon/Icon";
import { LastRemittancesCard } from "../../RemittancesCard/LastRemittancesCard";
import { Input } from "../../../Remittance/Input/Input";
import { useState } from "react";
import { RemittanceFilterListModal } from "../../RemittanceFilter/RemittanceFilterListModal";

// Example contact data used for rendering remittance cards
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
 * RemittanceList component displays a list of remittance records,
 * along with search input, filter modal, and pagination controls.
 */
export const RemittanceList = () => {
  const totalPages = 3;

  // State to manage visibility of the filter modal
  const [isOpenModalFilter, setIsOpenModalFilter] = useState(false);

  // Opens the filter modal
  const handleOpenFilter = () => {
    setIsOpenModalFilter(true);
  };

  return (
    <>
      {/* Filter modal for refining the remittance list */}
      <RemittanceFilterListModal
        onClose={() => setIsOpenModalFilter(false)}
        visible={isOpenModalFilter}
      />

      <div className="remittance-list-container">
        <h1>Listado de remesas</h1>
        <hr />

        {/* Search input and filter button */}
        <div className="remittance-list-filters">
          <Input type="text" icon={<Icon name="search" />} />

          <button onClick={handleOpenFilter}>
            <Icon name="slider" color="white" /> Filtrar por
          </button>
        </div>

        {/* List of remittance cards */}
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

        {/* Pagination controls */}
        <div className="remittance-list-pagination">
          <Icon name="leftarrow" />

          {Array.from({ length: totalPages }, (_, i) => (
            <a className="remmitance-list-page" key={i}>
              {i + 1}
            </a>
          ))}

          <Icon name="rightarrow" />
        </div>
      </div>
    </>
  );
};
