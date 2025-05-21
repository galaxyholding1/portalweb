// ContactCard.tsx
import React from "react";
import "./RemittancesCard.css";
import { RemittancesLastInterface } from "./RemittancesLastInterface";
import { Icon } from "../../ui/Icon/Icon";
import { Formatter } from "../../../../util/formatter";

interface Props {
  data: RemittancesLastInterface;
}

export const LastRemittancesCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="contact-card">
      <div className="avatar2">
        <Icon name="icUser" />
      </div>
      <div className="contact-info">
        <strong>{data.name}</strong>
        <span>{data.business}</span>
      </div>

      <div className="avatar2">
        <img src={data.flagUrl} alt="flag" className="flag" />
      </div>
      <div className="contact-info">
        <strong className="price">
          {Formatter.formatCurrency(data.price)}
        </strong>

        <span> {data.date}</span>
      </div>

      <div className="avatar2">
        <Icon name="bdgeOk" />
      </div>
    </div>
  );
};
