import { RemittancesCard } from "./RemittancesCard";
import { RemittancesInterface } from "./RemittancesInterface";
import "./RemittancesGrid.css";
import { Icon } from "../../ui/Icon/Icon";
import { Card } from "../Card/Card";
import { CardMoments } from "../Card/CardMoments";
import { Link, useLocation } from "react-router";

const contacts: RemittancesInterface[] = [
  {
    id: 1,
    name: "Jesús Muniesa Pérez",
    business: 'Ferretería "San Juan Cielo"',
    initials: "JM",
    flagUrl: "https://flagcdn.com/us.svg",
  },
  {
    id: 2,
    name: "Laura Gómez",
    business: "Tienda La Esquina",
    initials: "LG",
    flagUrl: "https://flagcdn.com/mx.svg",
  },
  {
    id: 3,
    name: "Jesús Muniesa Pérez",
    business: 'Ferretería "San Juan Cielo"',
    initials: "JM",
    flagUrl: "https://flagcdn.com/us.svg",
  },
  {
    id: 4,
    name: "Laura Gómez",
    business: "Tienda La Esquina",
    initials: "LG",
    flagUrl: "https://flagcdn.com/mx.svg",
  },
  {
    id: 5,
    name: "Jesús Muniesa Pérez",
    business: 'Ferretería "San Juan Cielo"',
    initials: "JM",
    flagUrl: "https://flagcdn.com/us.svg",
  },
  {
    id: 6,
    name: "Laura Gómez",
    business: "Tienda La Esquina",
    initials: "LG",
    flagUrl: "https://flagcdn.com/mx.svg",
  },
];

export const RemittancesGrid = ({
  filter = false,
  stateIndicator = false,
  enableLink = false,
}) => {
  const CardComponent = filter ? CardMoments : Card;
  const { pathname } = useLocation();
  return (
    <div className="grid-area-movements" style={{ gridRow: "span 2" }}>
      <h3 className="title">¿A quién deseas enviar dinero?</h3>
      <hr />
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
        <Link className="btn-add-contact" to="/portal-empresas/remesas/enviar">
          Confirmar
        </Link>
        <p className="subtitle">¿No encuentras a quíen estas buscando? <a>Encontrar gente cerca de mí</a></p>
      </div>
    </div>
  );
};
