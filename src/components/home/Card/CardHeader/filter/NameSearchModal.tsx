interface NameSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NameSearchModal: React.FC<NameSearchModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="name-modal" onClick={(e) => e.stopPropagation()}>
        <input
          type="text"
          placeholder="Ingrese el nombre del movimiento"
          className="name-input"
        />
        <button className="search-button">Buscar</button>
      </div>
    </div>
  );
};
