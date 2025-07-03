import { Link, useLocation, useNavigate } from "react-router";
import { useAuthStore } from "../../../../store/auth-store";
import logoutIcon from '../../../../assets/icons/logout.svg' 
import chevronRight from '../../../../assets/icons/chevron_right.svg' 
import lock from '../../../../assets/icons/lock.svg' 
import { getPathByClient } from "../../../../util/getModeClient";
import { Icon } from "../../../common/ui/Icon/Icon";

// Defines the navigation items for logged-in users.
const navItems = [
  { name: "Solicitud de productos", path: "/home" }, // "Product Request"
  { name: "Seguridad", path: "/seguridad" }, // "Security"
  { name: "Contactános", path: null }, // "Contact Us"
]

export const LoggedLinks = () => {
  // `useLocation` hook provides access to the current URL's pathname.
  const { pathname } = useLocation();
  // `useAuthStore` hook provides the `logout` function to handle user logout.
  const { logout } = useAuthStore();
  // `useNavigate` hook provides the `Maps` function for programmatic navigation.
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Clears authentication state.
    navigate("/"); // Redirects to the home page.
  }

  return (
    <ul className="logged-links">
      {/* Maps through `navItems` to create navigation links for authenticated users. */}
      {navItems.map(({ name, path }, i) => (
        <Link
          // Dynamically constructs the `to` path by combining the client's base path with the item's path.
          to={path && getPathByClient(pathname) + path}
          key={i + path} // Unique key for each link.
          // Applies the "active-item" class if the current pathname matches the link's path, for styling.
          className={pathname == path ? "active-item" : ""}
        >
          {name} {/* The display name for the navigation item. */}
        </Link>
      ))}
      {/* Logout button */}
      <button className="btn-logout" onClick={handleLogout}>
        {/* Uses the generic `Icon` component to render the logout icon. */}
        <Icon name={"logout"} alt="Salir" color="primary"/> {/* "Exit" */}
        Salir
      </button>
    </ul>
  );
};