import { useState } from "react";
import { FilterModal } from "./Filter/FilterModal";
import { CalendarModal } from "./Filter/CalendarModal";
import { NameSearchModal } from "./Filter/NameSearchModal";
import "./MovementsHeader.css";
import filterIcon from "../../../../../assets/icons/filter_icon.svg";

export const MovementsHeader = ({ icon, title, morePath }) => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showNameInput, setShowNameInput] = useState(false);

  const handleFilterClick = () => setShowFilterModal(!showFilterModal);
  const handleCloseModals = () => {
    setShowFilterModal(false);
    setShowCalendar(false);
    setShowNameInput(false);
  };

  return (
    <div className="movements-header-wrapper">
  <div className="movements-header-row">
    <div className="card-header-box">
      <div className="header-title">
        {icon}
        <h3>{title}</h3>
      </div>
    </div>

    <div className="filter-section">
      <button className="filter-button" onClick={handleFilterClick}>
        <img src={filterIcon} alt="filter_icon" />
        filtrar por
      </button>

      {showFilterModal && (
        <div className="filter-submenu">
          <div className="submenu-options">
            <button
              className="submenu-option"
              onClick={() => {
                setShowFilterModal(false);
                setShowCalendar(true);
              }}
            >
              Fecha
            </button>
            <button
              className="submenu-option"
              onClick={() => {
                setShowFilterModal(false);
                setShowNameInput(true);
              }}
            >
              Nombre
            </button>
          </div>
        </div>
      )}
    </div>
  </div>

  <CalendarModal isOpen={showCalendar} onClose={handleCloseModals} />
  <NameSearchModal isOpen={showNameInput} onClose={handleCloseModals} />
</div>

  )
}