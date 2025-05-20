import { Flag } from "../../Flag/Flag";
import "./RemmitanceConfirmationItem.css";
import userIcon from "../../../../assets/icons/user_icon.svg";

export const RemmitanceConfirmationItem = () => {
  const infoGeneral = [
    { label: "País", value: "Colombia" },
    { label: "Moneda", value: "COF" },
    { label: "Cambio", value: "1 USD = 970 ARS" },
    { label: "Tasa de red", value: "1,45%" },
    { label: "Tiempo estimado", value: "9 seg." },
  ];

  const persona = {
    nombre: "Alicia Marañón Bautista",
    parentesco: "Hermana",
  };

  const monto = "100,00 COP";
  const fecha = "16 de mayo 2025";

  return (
    <div className="remmitance-item">
      <div className="header">
        <div className="left-section">
          <div className="initials-placeholder">{/* Se añade luego */}</div>
          <div className="name-section">
            <div className="name">{persona.nombre}</div>
            <div className="relation">{persona.parentesco}</div>
          </div>
        </div>
        <div className="right-section">
          <Flag />
        </div>
      </div>

      <div className="amount">Monto: {monto}</div>

      <div className="details">
        <div className="left-info">
          {infoGeneral.map((item, index) => (
            <div key={index} className="info-item">
              {item.label}: {item.value}
            </div>
          ))}
        </div>
        <div className="right-info">
          <div className="date">{fecha}</div>
        </div>
      </div>

      <div className="icon-container">
        <img src={userIcon} alt="userIcon" />
      </div>
    </div>
  );
};
