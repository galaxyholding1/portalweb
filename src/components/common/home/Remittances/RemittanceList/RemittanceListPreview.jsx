import "./RemittanceList.css";
import { Icon } from "../../../ui/Icon/Icon";
import { LastRemittancesCard } from "../../RemittancesCard/LastRemittancesCard";
import { Input } from "../../../Remittance/Input/Input";
import { useState } from "react";
import { RemittanceFilterListModal } from "../../RemittanceFilter/RemittanceFilterListModal";

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

export const RemittanceListPreview = () => {

  const [isOpenModalFilter, setIsOpenModalFilter] = useState(false);

  const handleOpenFilter = () => {
    setIsOpenModalFilter(true);
  };

  return (
    <>
      <RemittanceFilterListModal
        onClose={() => setIsOpenModalFilter(false)}
        visible={isOpenModalFilter}
      />
      <div className="remittance-list-container">
        <h1 className="mini">Listado de remesas</h1>
        <hr />
        <div className="remittance-list-filters">
          <Input type="text" icon={<Icon name="search" />} />

          <button onClick={handleOpenFilter}>
            <Icon name="slider" color="white" /> Filtrar por
          </button>
          <button onClick={handleOpenFilter} className="link">
            <Icon name="add_plus_circle" /> ver mas
          </button>
        </div>
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
