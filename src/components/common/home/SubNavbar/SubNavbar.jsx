import { useState } from "react";
import "./SubNavbar.css";
import { MenuTooltip } from "../SubNavbar/tooltip/MenuTooltip";
import Homesubmenu from "../../../../assets/icons/home.svg";
import switchIcon from "../../../../assets/icons/switch.svg";
import Credit_Card_01 from "../../../../assets/icons/credit_card.svg";
import Remesas from "../../../../assets/icons/remesas.svg";
import { useLocation, useNavigate } from "react-router";
import { getModeClient, pathByClient } from "../../../../util/getModeClient";

const SubNavbar = () => {
  const [activeItem, setActiveItem] = useState("inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tooltipData, setTooltipData] = useState(null);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const menuItems = [
    {
      id: "inicio",
      icon: <img src={Homesubmenu} alt="inicio" className="nav-icon-img" />,
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
        <img src={switchIcon} alt="switch" className="nav-icon-img" />
      ),
      text: "transferencias",
    },
    {
      id: "pagos",
      icon: <img src={Credit_Card_01} alt="inicio" className="nav-icon-img" />,
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
    {
      id: "remesas",
      icon: <img src={Remesas} alt="inicio" className="nav-icon-img" />,
      text: "Remesas",
    },
  ];

  const menuItemsLinkIds = [ // Son items que no tienen submenu, solo redireccion (los ids)
    'remesas'
  ]

  const handleItemClick = (item, event) => {
    if ( menuItemsLinkIds.includes(item.id) ) 
      navigate(`${pathByClient[getModeClient(pathname)]}/${item.id}`)

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
