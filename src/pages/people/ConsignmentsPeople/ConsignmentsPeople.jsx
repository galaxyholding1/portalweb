import { useState } from "react";
import bannerImage from "../../../assets/images/banner-home.png";
import "./ConsignmentsPeople.css";

// Array with the titles of the tabs to be displayed
const tabs = [
  "Enviar y recibir",
  "Líneas de atención",
  "Beneficios",
  "Características",
  "Tasas y tarifas",
  "Documentos",
];

// Main component representing the remittances section for individuals
export const ConsignmentsPeople = () => {
  // Hook to manage which tab is active (defaulting to the first one)
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    // Main component container
    <div className="consignments-container">
      <div className="consignments-presentation">
        <div className="consignments-text">
          <h1>
            Remesas <br />
            Galaxy Pay
          </h1>
          <h4>
            Con las remesas puedes enviar dinero desde el exterior y recibirlo
            en Colombia a través de las empresas de remesas de todo el mundo que
            tienen convenio con Galaxy Pay.
          </h4>
          <p>
            Este producto es ofrecido por Galaxy Pay. Establecimiento Bancario.
          </p>
        </div>

        {/* Right-side image (banner) */}
        <div className="consignments-hero">
          <img src={bannerImage} alt="remesas_galaxy_pay" />
        </div>
      </div>
      <div className="consignments-detail">
        <div className="tabs">
          <div className="tab-header">
            {tabs.map((tab, index) => (
              <button
                key={index}
                // Styles the button as "active" if it corresponds
                className={`tab-button ${
                  activeIndex === index ? "active" : ""
                }`}
                // On click, updates the active tab
                onClick={() => setActiveIndex(index)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="tab-content">
            <h2>{tabs[activeIndex]}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};