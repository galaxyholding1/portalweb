// ContactGrid.tsx
import React from "react";
import { LastRemittancesCard } from "./LastRemittancesCard";
import { RemittancesLastInterface } from "./RemittancesLastInterface";
import "./LastConsignment.css";
import { Icon } from "../../ui/Icon/Icon";
import { Card } from "../Card/Card";
import { CardMoments } from "../Card/CardMoments";
import { MovementsItem } from "../movements/MovementsItem";
import { Link, useLocation } from "react-router";

import { getPathByClient } from "../../../../util/getModeClient";
import { SaveButton } from "../../ui/Button/SaveButton";

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
  const CardComponent = filter ? CardMoments : Card;
  const { pathname } = useLocation();
  return (
    <div className="grid-area-movements">
      <CardComponent
        title="Últimas Remesas"
        icon={<Icon name="arrow_left_right" />}
        morePath={`${getPathByClient(pathname)}/movimientos`}
      >
        <div className="contact-grid2">
          {contacts.map((contact) => (
            <LastRemittancesCard key={contact.id} data={contact} />
          ))}
        </div>
      </CardComponent>
    </div>
  );
};
