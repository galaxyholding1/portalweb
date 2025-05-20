// ContactGrid.tsx
import React from "react";
import { RemittancesCard } from "./RemittancesCard";
import { RemittancesInterface } from "./RemittancesInterface";
import "./RemittancesGrid.css";
import { Icon } from "../../ui/Icon/Icon";
import { Card } from "../Card/Card";
import { CardMoments } from "../Card/CardMoments";
import { MovementsItem } from "../movements/MovementsItem";
import { useLocation } from "react-router";

import { getPathByClient } from "../../../../util/getModeClient";

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
    <div className="grid-area-movements">
      <CardComponent
        title="Remesas"
        icon={<Icon name="setup" />}
        morePath={`${getPathByClient(pathname)}/movimientos`}
      >
        <div class="remittance-grid">
          <div class="remittance-info">
            <h3 class="title">¿A quién deseas enviar dinero?</h3>
            <p class="subtitle">Seleccionar uno de los contactos habituales</p>
            <div class="habitual-contact">
              <span class="icon">
                <Icon name="icUser" />
              </span>
              <span> Contactos habituales</span>
            </div>
          </div>
          <div class="remittance-search">
            <div class="search-bar">
              <input
                type="text"
                placeholder="Buscar por nombre, email, número..."
              />
              <span class="search-icon">
                <Icon name="icSearch" />
              </span>
            </div>
            <a href="#" class="see-more">
              ver más
            </a>
          </div>
        </div>

        <div className="contact-grid">
          {contacts.map((contact) => (
            <RemittancesCard key={contact.id} data={contact} />
          ))}
        </div>
        <div class="remittance-grid">
          <div class="remittance-info">
            <h5 class="title2">¿No encuentras a quíen estas buscando?</h5>
            <p class="subtitle">Encontrar gente cerca de mís</p>
          </div>
        </div>
      </CardComponent>
    </div>
  );
};
