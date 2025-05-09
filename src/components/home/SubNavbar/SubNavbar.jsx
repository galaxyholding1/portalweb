import React, { useState } from "react";
import "./SubNavbar.css";

const SubNavbar = () => {
  const [activeItem, setActiveItem] = useState("inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            onClick={() => {
              setActiveItem(item.id);
              setIsMenuOpen(false);
            }}
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
    </nav>
  );
};

export default SubNavbar;
