import { RemittancesCard } from "./RemittancesCard";
import { RemittancesInterface } from "./RemittancesInterface";
import "./RemittancesGrid.css";
import { Icon } from "../../ui/Icon/Icon";
import { Card } from "../Card/Card";
import { CardMoments } from "../Card/CardMoments";
import { Link, useLocation, useNavigate } from "react-router";
import { getPathByClient } from "../../../../util/getModeClient";
import { useModalStore } from "../../../../store/modal-store";
import { DinamicKeyModal } from "../../ui/modal/DinamicKeyModal/DinamicKeyModal";

// This component displays a grid of contacts for remittances, allowing users to select a contact for sending money.
// It includes a search bar for finding contacts and a button to confirm the selection.
const contacts: RemittancesInterface[] = [
  {
    id: 1,
    name: "Jesús Muniesa Pérez",
    business: 'Ferretería "San Juan Cielo"',
    initials: "JM",
    flag: "co",
  },
  {
    id: 2,
    name: "Laura Gómez",
    business: "Tienda La Esquina",
    initials: "LG",
    flag: "mx",
  },
  {
    id: 3,
    name: "Jesús Muniesa Pérez",
    business: 'Ferretería "San Juan Cielo"',
    initials: "JM",
    flag: "us",
  },
  {
    id: 4,
    name: "Laura Gómez",
    business: "Tienda La Esquina",
    initials: "LG",
    flag: "co",
  },
  {
    id: 5,
    name: "Jesús Muniesa Pérez",
    business: 'Ferretería "San Juan Cielo"',
    initials: "JM",
    flag: "ve",
  },
  {
    id: 6,
    name: "Laura Gómez",
    business: "Tienda La Esquina",
    initials: "LG",
    flag: "us",
  },
  {
    id: 7,
    name: "Juan Perez",
    business: "Tío",
    initials: "JP",
    flag: "us",
  },
  {
    id: 8,
    name: "Laura Gómez",
    business: "Tienda La Esquina",
    initials: "LG",
    flag: "us",
  },
  {
    id: 9,
    name: "Juan Ayala",
    business: "Tienda La Esquina",
    initials: "JA",
    flag: "co",
  },
];

// It includes a search bar for finding contacts and a button to confirm the selection.
// It also handles navigation to a dynamic key modal for further actions.
// It uses the useNavigate hook from react-router for navigation and the useModalStore for showing
export const RemittancesGrid = () => {
  const navigate = useNavigate();
  const { showModal } = useModalStore();
  const { pathname } = useLocation();


  const handleConfirm = async() => {
    const response = await showModal( 
      <DinamicKeyModal/>
    );

    if (!response) return;

    navigate(`${getPathByClient(pathname)}/remesas/enviar-usuario/proceso`);
  };

  return (
    <div className="grid-area-movements" style={{ gridRow: "span 2" }}>
      <h3 className="title">¿A quién deseas enviar dinero?</h3>
      <hr style={{marginBottom: '1rem'}}/>
      <div className="habitual-contact">
        <Icon name="icUser" />
        <span> Contactos habituales</span>
      </div>

      <p className="text">Seleccionar uno de los contactos habituales</p>

      <div className="search-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar por nombre, email, número..."
          />
          <span className="search-icon">
            <Icon name="icSearch" />
          </span>
        </div>
        <Link to="#" className="see-more">
          <Icon name="add_plus_circle" />
          ver más
        </Link>
      </div>

      <div className="contact-grid">
        {contacts.map((contact) => (
          <RemittancesCard key={contact.id} data={contact} />
        ))}
      </div>

      <div className="remittance-info">
        <button className="btn-add-contact" onClick={handleConfirm}>
          Confirmar
        </button>
        <p className="subtitle">¿No encuentras a quíen estas buscando? <a>Encontrar gente cerca de mí</a></p>
      </div>
    </div>
  );
};

