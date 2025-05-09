import { Formatter } from "../../../util/formatter"
import MoneyIcon from "../../../assets/images/SVG/money.svg"
import "./movements.css"

export const MovementItem = ({amount, conceptTitle, date}) => {
  return (
    <div className="movement-item">
      <div className="movement-item-icon">
        <img src={MoneyIcon} alt="" />
      </div>
      <div className="movement-item-details">
        <p>{conceptTitle}</p>
        <span>{Formatter.formatDate( date )}</span>
      </div>
      <div className="movement-item-amount">
        { Formatter.formatCurrency(amount) }
      </div>
    </div>
  )
}
