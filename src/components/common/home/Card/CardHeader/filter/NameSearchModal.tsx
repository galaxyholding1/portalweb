import { useState } from "react";
import "./NameSearchModal.css";

interface NameSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NameSearchModal: React.FC<NameSearchModalProps> = ({
  isOpen,
  onClose,
}) => {
  // State to hold the value of the search input.
  const [searchValue, setSearchValue] = useState("");

  // Handles the search action when the search button is clicked.
  const handleSearch = () => {
    // Prevents searching if the input is empty.
    if (!searchValue.trim()) {
      alert("Por favor, ingrese un nombre para buscar");
      return;
    }
    // Displays an alert with the search query (for demonstration purposes).
    alert(`Buscando movimientos con el nombre: ${searchValue}`);
    // Clears the search input after searching.
    setSearchValue("");
    // Closes the modal.
    onClose();
  };

  // If the modal is not open, return null to render nothing.
  if (!isOpen) return null;

  return (
    // Modal overlay that covers the background and closes the modal when clicked.
    <div className="modal-overlay" onClick={onClose}>
      {/* Modal content, prevents closing when clicked inside. */}
      <div className="name-modal" onClick={(e) => e.stopPropagation()}>
        {/* Title of the modal. */}
        <h4 className="modal-title">Buscar por nombre</h4>
        {/* Input field for the search query. */}
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Ingrese el nombre del movimiento"
          className="name-input"
        />
        {/* Button to trigger the search. */}
        <button className="search-button" onClick={handleSearch}>
          {/* SVG icon for the search button. */}
          <svg
            className="search-icon"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          Buscar
        </button>
      </div>
    </div>
  );
};