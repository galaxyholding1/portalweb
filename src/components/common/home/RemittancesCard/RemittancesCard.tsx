// ContactCard.tsx
import React from "react";
import "./RemittancesCard.css";
import { RemittancesInterface } from "./RemittancesInterface";
import { Flag } from "../../Flag/Flag";

interface Props {
  data: RemittancesInterface;
}
/// RemittancesCard Component
// This component displays a contact card with the contact's initials, name, business, and flag
export const RemittancesCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="contact-card">
      {/* Displays the initials of the contact. */}
      <div className="avatar">{data.initials}</div>
      <div className="contact-info">
        {/* Displays the contact's name. */}
        <strong>{data.name}</strong>
        {/* Displays the contact's business name. */}
        <span>{data.business}</span>
      </div>
      {/* Displays a flag based on the provided country code. */}
      <Flag code={data.flag}/>
      {/* Checkbox for selecting the contact. */}
      <input type="checkbox" className="checkbox" />
    </div>
  );
};