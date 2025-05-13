import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { useAuthStore } from "../../../store/auth-store";
import logoutIcon from '../../../assets/images/SVG/logout.svg'
import chevronRight from '../../../assets/images/SVG/chevron_right.svg'
import lock from '../../../assets/images/SVG/lock.svg'
import { getPathByClient } from "../../../util/getModeClient";

const navItems = [
  { name: "Solicitud de productos", path: "/solicitud-productos" },
  { name: "Seguridad", path: "/seguridad" },
  { name: "Contactános", path: "/contactanos" },
]

export const LoggedLinks = () => {
  const { pathname } = useLocation();
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  }
  return (
    <ul className="logged-links">
      {navItems.map(({ name, path }, i) => (
        <Link
          to={getPathByClient(pathname) + path}
          key={i + path}
          className={pathname == path ? "active-item" : ""}
        >
          {name}
        </Link>
      ))}
      <button className="btn-logout" onClick={handleLogout}>
        <img src={logoutIcon} alt="" />Salir
      </button>
      <div className="dinamic-key-container">
        <img src={lock} alt="" />
        <div>
          <span>Clave Dínamica</span>
          <span className="dinamic-key">000 000</span>
        </div>
        <img src={chevronRight} alt="" />
      </div>
    </ul>
  );
};
