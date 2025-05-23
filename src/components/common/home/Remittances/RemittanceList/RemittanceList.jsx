import './RemittanceList.css'
import { Icon } from "../../../ui/Icon/Icon";
import { LastRemittancesCard } from "../../RemittancesCard/LastRemittancesCard";
import { Input } from "../../../Remittance/Input/Input";
import { useState } from 'react';
import { RemittanceFilterM } from '../../RemittanceFilter/RemittanceFilter';

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

export const RemittanceList = () => {
  const totalPages = 3;

  const [isOpenModalFilter, setIsOpenModalFilter] = useState(false)

  const handleOpenFilter = () => {
    setIsOpenModalFilter(true)
  }

  return (
    <>
      {isOpenModalFilter && <RemittanceFilterM/>}
      <div className="remittance-list-container">
        <h1>Listado de remesas</h1>
        <hr />
        <div className="remittance-list-filters">
          <Input type="text" icon={<Icon name="search" color='white'/>}/>
          
          <button onClick={ handleOpenFilter } >
            <Icon name="slider" /> Filtrar por
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
        <div className="remittance-list-pagination">
          <Icon name="leftarrow" />

          {Array.from({ length: totalPages }, (_, i) => (
            <a className="remmitance-list-page" key={i}>{i + 1}</a>
          ))}

          <Icon name="rightarrow" />
        </div>
      </div>
    </>
  );
};
