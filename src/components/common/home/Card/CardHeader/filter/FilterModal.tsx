import React from "react";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDate: () => void;
  onSelectName: () => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
  onSelectDate,
  onSelectName,
}) => {
  // If the modal is not open, return null to render nothing.
  if (!isOpen) return null;

  return (
    // Modal overlay that covers the background and closes the modal when clicked.
    <div className="modal-overlay" onClick={onClose}>
      {/* Filter modal content, prevents closing when clicked inside. */}
      <div className="filter-modal" onClick={(e) => e.stopPropagation()}>
        <div className="filter-options">
          {/* Button to select filter by date. */}
          <button onClick={onSelectDate}>Fecha</button>
          {/* Button to select filter by name. */}
          <button onClick={onSelectName}>Nombre</button>
        </div>
      </div>
    </div>
  );
};