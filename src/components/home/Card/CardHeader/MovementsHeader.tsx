import { useState } from "react";
import { FilterModal } from "./Filter/FilterModal";
import { CalendarModal } from "./Filter/CalendarModal";
import { NameSearchModal } from "./Filter/NameSearchModal";
import "./MovementsHeader.css";

export const MovementsHeader = ({ icon, title, morePath }) => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showNameInput, setShowNameInput] = useState(false);

  const handleFilterClick = () => setShowFilterModal(true);
  const handleCloseModals = () => {
    setShowFilterModal(false);
    setShowCalendar(false);
    setShowNameInput(false);
  };

  return (
    <>
      <span className="card-header">
        <div>
          {icon}
          <h3>{title}</h3>
        </div>
        <button className="filter-button" onClick={handleFilterClick}>
          <svg
            className="filter-icon"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" />
          </svg>
          filtrar por
        </button>
      </span>

      <FilterModal
        isOpen={showFilterModal}
        onClose={handleCloseModals}
        onSelectDate={() => {
          setShowFilterModal(false);
          setShowCalendar(true);
        }}
        onSelectName={() => {
          setShowFilterModal(false);
          setShowNameInput(true);
        }}
      />

      <CalendarModal isOpen={showCalendar} onClose={handleCloseModals} />

      <NameSearchModal isOpen={showNameInput} onClose={handleCloseModals} />
    </>
  );
};
