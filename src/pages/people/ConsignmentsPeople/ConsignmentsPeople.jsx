import { useState } from "react";
import bannerImage from "../../../assets/images/banner-home.png";
import "./ConsignmentsPeople.css";

// Arreglo con los títulos de las pestañas que se mostrarán
const tabs = [
  "Enviar y recibir",
  "Líneas de atención",
  "Beneficios",
  "Características",
  "Tasas y tarifas",
  "Documentos",
];

// Componente principal que representa la sección de remesas para personas
export const ConsignmentsPeople = () => {
  // Hook para manejar cuál pestaña está activa (por defecto, la primera)
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    // Contenedor principal del componente
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

        {/* Imagen del lado derecho (banner) */}
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
                // Estiliza el botón como "activo" si corresponde
                className={`tab-button ${
                  activeIndex === index ? "active" : ""
                }`}
                // Al hacer clic, actualiza la pestaña activa
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
