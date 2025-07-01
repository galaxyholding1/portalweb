import { useState } from "react";
import { FilterModal } from "./Filter/FilterModal";
import { CalendarModal } from "./Filter/CalendarModal";
import { NameSearchModal } from "./Filter/NameSearchModal";
import "./MovementsHeader.css";
import filterIcon from "../../../../../assets/icons/filter_icon.svg";

export const MovementsHeader = ({ icon, title }) => {
  // State to control the visibility of the filter submenu.
  const [showFilterModal, setShowFilterModal] = useState(false);
  // State to control the visibility of the calendar modal.
  const [showCalendar, setShowCalendar] = useState(false);
  // State to control the visibility of the name search modal.
  const [showNameInput, setShowNameInput] = useState(false);

  // State to manage the current date displayed in the calendar.
  const [currentDate, setcurrentDate] = useState(new Date());

  // Toggles the visibility of the filter submenu.
  const handleFilterClick = () => setShowFilterModal(!showFilterModal);

  // Closes all active modals (filter, calendar, name search).
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

        {/* Button to open/close the filter submenu. */}
        <button className="filter-button" onClick={handleFilterClick}>
          <img src={filterIcon} alt="filter_icon" />
          filtrar por
        </button>

        {/* Filter submenu, shown conditionally. */}
        {showFilterModal && (
          <div className="filter-submenu">
            <div className="submenu-options">
              {/* Button to open the calendar modal. */}
              <button
                className="submenu-option"
                onClick={() => {
                  setShowFilterModal(false); // Close filter submenu
                  setShowCalendar(true); // Open calendar modal
                }}
              >
                Fecha
              </button>
              {/* Button to open the name search modal. */}
              <button
                className="submenu-option"
                onClick={() => {
                  setShowFilterModal(false); // Close filter submenu
                  setShowNameInput(true); // Open name search modal
                }}
              >
                Nombre
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Calendar modal, shown conditionally. */}
      <CalendarModal
        isOpen={showCalendar}
        onClose={handleCloseModals}
        currentDate={currentDate}
        setCurrentDate={setcurrentDate}
      />
      {/* Name search modal, shown conditionally. */}
      <NameSearchModal isOpen={showNameInput} onClose={handleCloseModals} />
    </div>
  );
};