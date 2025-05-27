// ContactCard.tsx
import React from "react";
import "./RemittancesCard.css";
import { RemittancesInterface } from "./RemittancesInterface";
import { Flag } from "../../Flag/Flag";

interface Props {
  data: RemittancesInterface;
}

export const RemittancesCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="contact-card">
      <div className="avatar">{data.initials}</div>
      <div className="contact-info">
        <strong>{data.name}</strong>
        <span>{data.business}</span>
      </div>
      <Flag code={data.flag}/>
      <input type="checkbox" className="checkbox" />
    </div>
  );
};
