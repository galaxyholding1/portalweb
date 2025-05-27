// ContactCard.tsx
import React from "react";
import "./RemittancesCard.css";
import { RemittancesLastInterface } from "./RemittancesLastInterface";
import { Icon } from "../../ui/Icon/Icon";
import { Formatter } from "../../../../util/formatter";
import { Flag } from "../../Flag/Flag";
import { StateIndicator } from "../movements/StateIndicator/StateIndicator";

interface Props {
  data: RemittancesLastInterface;
  showStateIcon?: boolean;
  showState?: boolean;
  className?: string;
}

export const LastRemittancesCard: React.FC<Props> = ({ data, className, showStateIcon = true, showState = false }) => {
  return (
    <div className={"contact-card-container" + (className ? ` ${className}` : "")}>
      <div>
        <Icon name="icUser" />
        <div className="contact-info">
          <strong>{data.name}</strong>
          <span>{data.business}</span>
        </div>
      </div>

      <div className="contact-card-detail">
        <Flag code="co"/>
        { showState && ( <StateIndicator state="pending"/> ) }
        <div className="column">
          <strong className="price">
            {Formatter.formatCurrency(data.price)}
          </strong>
          <span> {Formatter.formatDateLiteral(new Date(data.date))}</span>
        </div>
        {showStateIcon && <Icon name="bdgeOk" />}
      </div>
    </div>
  );
};
