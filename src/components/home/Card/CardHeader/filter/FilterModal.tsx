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
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="filter-modal" onClick={(e) => e.stopPropagation()}>
        <div className="filter-options">
          <button onClick={onSelectDate}>Fecha</button>
          <button onClick={onSelectName}>Nombre</button>
        </div>
      </div>
    </div>
  );
};
