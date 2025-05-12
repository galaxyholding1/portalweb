import React, { useState } from "react";
import "./SubNavbar.css";
import { MenuTooltip } from "../../../components/home/SubNavbar/tooltip/MenuTooltip";
import certificadosIcon from "../../../assets/images/SVG/Bell_Ring.svg";

const SubNavbar = () => {
  const [activeItem, setActiveItem] = useState("inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tooltipData, setTooltipData] = useState(null);

  const menuItems = [
    {
      id: "inicio",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        </svg>
      ),
      text: "inicio",
    },
    {
      id: "productos",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M8 12h8M12 8v8" />
        </svg>
      ),
      text: "productos",
      submenu: [
        {
          title: "Cuentas galaxy pay",
          items: [
            { text: "Consultar cuentas", link: "#" },
            { text: "Ver detalle de transacciones", link: "#" },
          ],
        },
        {
          title: "Créditos",
          items: [
            { text: "Consultar créditos", link: "#" },
            { text: "Pagar créditos", link: "#" },
            { text: "Desembolsar", link: "#" },
          ],
        },
        {
          title: "Administrar productos",
          items: [
            { text: "Inscribir productos", link: "#" },
            { text: "Productos propios", link: "#" },
          ],
        },
      ],
    },
    {
      id: "transferencias",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M17 8l4-4-4-4M3 12h18M7 16l-4 4 4 4" />
        </svg>
      ),
      text: "transferencias",
    },
    {
      id: "pagos",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
        </svg>
      ),
      text: "pagos",
    },
    {
      id: "documentos",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
          <path d="M14 2v6h6M8 13h8M8 17h8" />
        </svg>
      ),
      text: "documentos",
    },
  ];

  const handleItemClick = (item, event) => {
    if (item.submenu) {
      const rect = event.currentTarget.getBoundingClientRect();
      setTooltipData({
        sections: item.submenu,
        position: {
          top: rect.bottom + 10,
          left: rect.left,
        },
      });
    } else {
      setTooltipData(null);
    }
    setActiveItem(item.id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div
        className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`nav-container ${isMenuOpen ? "show" : ""}`}>
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`nav-item ${activeItem === item.id ? "active" : ""}`}
            onClick={(e) => handleItemClick(item, e)}
          >
            <div className="nav-content">
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.text}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="user-profile">
        <div className="profile-image">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Perfil de usuario"
          />
        </div>
        <div className="profile-info">
          <p>Bienvenido, nombre usuario</p>
          <a href="#" className="update-link">
            actualizar mis datos
          </a>
        </div>
      </div>

      {tooltipData && (
        <MenuTooltip
          sections={tooltipData.sections}
          position={tooltipData.position}
          onClose={() => setTooltipData(null)}
        />
      )}
    </nav>
  );
};

export default SubNavbar;
