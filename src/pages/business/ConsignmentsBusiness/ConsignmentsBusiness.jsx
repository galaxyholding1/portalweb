/**
 * @fileoverview Componente de la página de remesas para el portal de negocios
 * @requires react
 */

// Importación de hooks y recursos necesarios
import { useState } from "react";
// Importación de la imagen del banner para la sección hero
import bannerImage from "../../../assets/images/banner-home.png";
// Importación de estilos compartidos con la versión de personas
import "../../people/ConsignmentsPeople/ConsignmentsPeople.css";

/**
 * @constant {string[]} tabs - Lista de pestañas disponibles en la página de remesas
 * Define las diferentes secciones de información que se mostrarán al usuario
 */
const tabs = [
  "Enviar y recibir", // Información sobre el proceso de envío y recepción de remesas
  "Líneas de atención", // Canales de atención al cliente
  "Beneficios", // Ventajas del servicio de remesas
  "Características", // Funcionalidades y detalles del servicio
  "Tasas y tarifas", // Información sobre costos y comisiones
  "Documentos", // Documentación necesaria para el servicio
];

/**
 * Componente ConsignmentsBusiness
 *
 * @component
 * @description Renderiza la página principal de remesas para el portal de negocios.
 * Muestra información detallada sobre el servicio de remesas de Galaxy Pay,
 * incluyendo una sección de presentación y un sistema de pestañas para
 * navegar entre diferentes tipos de información.
 *
 * @returns {JSX.Element} Página de remesas con información y navegación por pestañas
 */
export const ConsignmentsBusiness = () => {
  /**
   * Estado para controlar la pestaña activa
   * @type {[number, function]} Par de estado y función actualizadora
   */
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="consignments-container">
      {/* Sección de presentación con información principal */}
      <div className="consignments-presentation">
        {/* Contenedor del texto principal */}
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
            Este producto es ofrecido por Galaxy Pay. <br />
            Establecimiento Bancario.
          </p>
        </div>
        {/* Contenedor de la imagen hero */}
        <div className="consignments-hero">
          <img src={bannerImage} alt="remesas_galaxy_pay" />
        </div>
      </div>

      {/* Sección de pestañas con información detallada */}
      <div className="consignments-detail">
        <div className="tabs">
          {/* Navegación de pestañas */}
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
          {/* Contenido de la pestaña seleccionada */}
          <div className="tab-content">
            <h2>{tabs[activeIndex]}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
