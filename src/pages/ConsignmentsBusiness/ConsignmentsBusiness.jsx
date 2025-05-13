import { useState } from "react";
import bannerImage from "../../assets/images/banner-home.png";
import "../ConsignmentsPeople/ConsignmentsPeople.css";

const tabs = [
  "Enviar y recibir",
  "Líneas de atención",
  "Beneficios",
  "Características",
  "Tasas y tarifas",
  "Documentos",
];

export const ConsignmentsBusiness = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="consignments-container">
      <div className="consignments-presentation">
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
            Este producto es ofrecido por Galaxy Pay. <br />
            Establecimiento Bancario.
          </p>
        </div>
        <div className="consignments-hero">
          <img src={bannerImage} alt="remesas_galaxy_pay"/>
        </div>
      </div>
      <div className="consignments-detail">
        <div className="tabs">
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
          <div className="tab-content">
            <h2>{tabs[activeIndex]}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
