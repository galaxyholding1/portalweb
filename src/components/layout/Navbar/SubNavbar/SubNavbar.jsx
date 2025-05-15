import { useState } from "react";
import "./SubNavbar.css";
import { MenuTooltip } from "./tooltip/MenuTooltip";
import switchIcon from "../../../../assets/icons/switch.svg";
import Credit_Card_01 from "../../../../assets/icons/credit_card.svg";
import inicioIcon from "../../../../assets/icons/inicio_icon.svg";
import remesasIcon from "../../../../assets/icons/remesas_icon.svg";
import documentsIcon from "../../../../assets/icons/documents_icon.svg";
import productsIcon from "../../../../assets/icons/products_icon.svg";
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
      icon: <img src={inicioIcon} alt="inicio" className="nav-icon-img" />,
      text: "inicio",
    },
    {
      id: "productos",
      icon: <img src={productsIcon} alt="inicio" className="nav-icon-img" />,
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
      icon: <img src={switchIcon} alt="switch" className="nav-icon-img" />,
      text: "transferencias",
    },
    {
      id: "pagos",
      icon: <img src={Credit_Card_01} alt="inicio" className="nav-icon-img" />,
      text: "pagos",
    },
    {
      id: "documentos",
      icon: <img src={documentsIcon} alt="inicio" className="nav-icon-img" />,
      text: "documentos",
    },
    {
      id: "remesas",
      icon: <img src={remesasIcon} alt="inicio" className="nav-icon-img" />,
      text: "Remesas",
    },
  ];

  const menuItemsLinkIds = [
    // Son items que no tienen submenu, solo redireccion (los ids)
    "remesas",
  ];

  const handleItemClick = (item, event) => {
    if (menuItemsLinkIds.includes(item.id))
      navigate(`${pathByClient[getModeClient(pathname)]}/${item.id}`);

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
