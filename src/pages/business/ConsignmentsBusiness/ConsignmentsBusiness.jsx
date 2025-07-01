/**
 * @fileoverview Component for the remittances page for the business portal
 * @requires react
 */

// Import necessary hooks and resources
import { useState } from "react";
// Import banner image for the hero section
import bannerImage from "../../../assets/images/banner-home.png";
// Import shared styles with the people's version
import "../../people/ConsignmentsPeople/ConsignmentsPeople.css";

/**
 * @constant {string[]} tabs - List of available tabs on the remittances page
 * Defines the different information sections to be displayed to the user
 */
const tabs = [
  "Enviar y recibir", // Information about the process of sending and receiving remittances
  "Líneas de atención", // Customer service channels
  "Beneficios", // Benefits of the remittance service
  "Características", // Features and details of the service
  "Tasas y tarifas", // Information about costs and fees
  "Documentos", // Required documentation for the service
];

/**
 * ConsignmentsBusiness Component
 *
 * @component
 * @description Renders the main remittances page for the business portal.
 * Displays detailed information about Galaxy Pay's remittance service,
 * including a presentation section and a tab system to
 * navigate between different types of information.
 *
 * @returns {JSX.Element} Remittances page with information and tab navigation
 */
export const ConsignmentsBusiness = () => {
  /**
   * State to control the active tab
   * @type {[number, function]} State pair and update function
   */
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="consignments-container">
      {/* Presentation section with main information */}
      <div className="consignments-presentation">
        {/* Container for the main text */}
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
        {/* Container for the hero image */}
        <div className="consignments-hero">
          <img src={bannerImage} alt="remesas_galaxy_pay" />
        </div>
      </div>

      {/* Tabs section with detailed information */}
      <div className="consignments-detail">
        <div className="tabs">
          {/* Tab navigation */}
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
          {/* Content of the selected tab */}
          <div className="tab-content">
            <h2>{tabs[activeIndex]}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};