import minusIcon from "../../../../assets/icons/remove_minus_icon.svg";
import "./DetailsButton.css";

export const DetailsButton = () => {
  return (
    <button className="details-button">
      <img src={minusIcon} alt="minusIcon" className="details-icon" />
      detalles
    </button>
  );
};
