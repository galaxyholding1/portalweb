import React from "react";
import { LastRemittancesCard } from "./LastRemittancesCard";
import { RemittancesLastInterface } from "./RemittancesLastInterface";
import "./LastConsignment.css";
import { Icon } from "../../ui/Icon/Icon";
import { Card } from "../Card/Card";
import { CardMoments } from "../Card/CardMoments";
import { Link, useLocation } from "react-router";
import { getPathByClient } from "../../../../util/getModeClient";

const contacts: RemittancesLastInterface[] = [
  {
    id: 1,
    user: "https://flagcdn.com/us.svg",
    name: "Jesús Muniesa Pérez",
    business: 'Ferretería "San Juan Cielo"',
    initials: "JM",
    flagUrl: "https://flagcdn.com/us.svg",
    price: 1000,
    date: "2023-10-01",
    state: true,
  },
  {
    id: 2,
    user: "https://flagcdn.com/us.svg",
    name: "Laura Gómez",
    business: "Tienda La Esquina",
    initials: "LG",
    flagUrl: "https://flagcdn.com/mx.svg",
    price: 1000,
    date: "2023-10-01",
    state: true,
  },
  {
    id: 3,
    user: "https://flagcdn.com/us.svg",
    name: "Laura Gómez",
    business: "Tienda La Esquina",
    initials: "LG",
    flagUrl: "https://flagcdn.com/mx.svg",
    price: 1000,
    date: "2023-10-01",
    state: true,
  },
];

export const LastConsignment = ({
  filter = false,
  stateIndicator = false,
  enableLink = false,
}) => {
  // Selects either CardMoments or Card component based on the 'filter' prop.
  const CardComponent = filter ? CardMoments : Card;
  // Gets the current pathname from the URL to determine the client's navigation context.
  const { pathname } = useLocation();

  return (
    // Main container for the card, typically positioned within a grid layout.
    <div className="grid-area-movements">
      {/* Renders the chosen CardComponent, passing props for its title, icon, and 'view more' link. */}
      <CardComponent
        title="Últimas Remesas" // "Last Remittances"
        icon={<Icon name="arrow_left_right" />}
        morePath={`${getPathByClient(pathname)}/movimientos`} // Path to view more movements.
      >
        {/* Container for the grid of last remittances cards. */}
        <div className="contact-grid2">
          {/* Maps through the 'contacts' array to render a LastRemittancesCard for each contact. */}
          {contacts.map((contact) => (
            <LastRemittancesCard key={contact.id} data={contact} />
          ))}
        </div>
      </CardComponent>
    </div>
  );
};