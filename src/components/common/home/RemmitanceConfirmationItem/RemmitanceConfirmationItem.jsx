import { Flag } from "../../Flag/Flag";
import "./RemmitanceConfirmationItem.css";
import userIcon from "../../../../assets/icons/user_icon.svg";
import { Link } from "react-router";
import { Icon } from "../../ui/Icon/Icon";

export const RemmitanceConfirmationItem = ({ large, onClick }) => {
  // General information about the remittance.
  const infoGeneral = [
    { label: "País", value: "Colombia" }, // Country
    { label: "Moneda", value: "COF" }, // Currency
    { label: "Cambio", value: "1 USD = 970 ARS" }, // Exchange rate
    { label: "Tasa de red", value: "1,45%" }, // Network fee
    { label: "Tiempo estimado", value: "9 seg." }, // Estimated time
  ];

  // Recipient's personal information.
  const persona = {
    nombre: "Alicia Marañón Bautista", // Name
    parentesco: "Hermana", // Relationship (Sister)
  };

  const monto = "100,00 COP"; // Amount
  const fecha = "16 de mayo 2025"; // Date (May 16, 2025)

  return (
    <div className="remmitance-item">
      <div className="header">
        <div className="left-section">
          <div className="initials-placeholder">{/* To be added later */}</div>
          <div className="name-section">
            <div className="name">{persona.nombre}</div>
            <div className="relation">{persona.parentesco}</div>
          </div>
        </div>
        <div className="right-section">
          <Flag />
        </div>
      </div>

      <div className="amount">Monto: {monto}</div> {/* Amount: {amount} */}

      {/* Conditionally renders either a "details" link or the full details based on 'onClick' prop. */}
      {onClick ? (
        <>
          <Link to={onClick}>
            <Icon name="add_plus" /> detalles {/* details */}
          </Link>
          <div
            className="right-info date-absolute">
            <div className="date">{fecha}</div>
          </div>
        </>
      ) : (
        <div className="details" style={large ? { marginLeft: '.5rem' } : {}}>
          <div className="left-info">
            {infoGeneral.map((item, index) => (
              <div
                key={index}
                className="info-item"
                style={large ? { fontSize: "1rem" } : {}}
              >
                {item.label}: {item.value}
              </div>
            ))}
          </div>
          <div
            className="right-info"
            style={
              /* The one that was removed is added to maintain the location */
              large ? { marginTop: "3rem" } : {}
            }
          >
            {" "}
            <div className="date">{fecha}</div>
          </div>
        </div>
      )}

      <div className="icon-container">
        <Icon name="user_icon"/>
      </div>
    </div>
  );
};