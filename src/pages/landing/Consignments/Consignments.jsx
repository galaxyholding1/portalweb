import { useState } from "react";
import bannerImage from "../../../assets/images/banner-home.png";
import "./Consignments.css";

// Defines the tab labels
const tabs = [
  "Enviar y recibir",
  "Líneas de atención",
  "Beneficios",
  "Características",
  "Tasas y tarifas",
  "Documentos",
];

export const ConsignmentsPeople = () => {
  // Manages the active tab's index
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="consignments-container">
      {/* Presentation section */}
      <div className="consignments-presentation">
        {/* Text content */}
        <div className="consignments-text">
          <h1>
            Remesas <br />
            Galaxy Pay
          </h1>
          <h4>
            Con las remesas puedes enviar dinero desde el exterior y recibirlo en Colombia 
            a través de las empresas de remesas de todo el mundo que tienen convenio con Galaxy Pay.
          </h4>
          <p>
            Este producto es ofrecido por Galaxy Pay.
            Establecimiento Bancario.
          </p>
        </div>
        {/* Hero image */}
        <div className="consignments-hero">
          <img src={bannerImage} alt="remesas_galaxy_pay"/>
        </div>
      </div>
      {/* Detail section with tabs */}
      <div className="consignments-detail">
        <div className="tabs">
          {/* Tab headers */}
          <div className="tab-header">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`tab-button ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Tab content displays the active tab's title */}
          <div className="tab-content">
            <h2>{tabs[activeIndex]}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};