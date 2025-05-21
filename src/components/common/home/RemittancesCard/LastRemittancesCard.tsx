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
      <div className="contact-info"></div>
      <img src={data.flagUrl} alt="flag" className="flag" />
      <div className="contact-info">
        <strong className="price">
          {Formatter.formatCurrency(data.price)}
        </strong>

        <span> {data.date}</span>
      </div>

      <Icon name="bdgeOk" />
    </div>
  );
};
