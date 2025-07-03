import { Link, useLocation } from "react-router";
import { SocialMediaLinks } from "../../../common/SocialMediaLinks/SocialMediaLinks";
import { Icon } from "../../../common/ui/Icon/Icon";
import { useTheme } from "../../../../store/theme-store";
import './GuestNavbar.css'

// Defines the navigation links for the secondary navbar.
const secondaryLinks = [
  { name: "Personas", path: "/" },
  { name: "Negocios", path: null },
  { name: "Corporativos", path: null },
  { name: "Negocios especializados", path: null },
];

export const GuestNavbar = () => {
  // `useLocation` hook from React Router provides access to the current location object,
  // from which `pathname` (the current URL path) is extracted.
  const { pathname } = useLocation();
  const { theme, toggle } = useTheme();

  return (
    <nav className="navbar-galaxy-secondary">
      {/* Maps through the `secondaryLinks` array to create navigation links. */}
      {secondaryLinks.map(({ name, path }, i) => (
        <Link
          to={path} // The destination path for the link.
          key={i + path} // Unique key for each link, combining index and path.
          // Applies the "active-item" class if the current pathname matches the link's path,
          // for styling the active navigation item.
          className={pathname == path ? "active-item" : ""}
        >
          {name} {/* The display name for the link. */}
        </Link>
      ))}

      {/* Renders the SocialMediaLinks component, which displays social media icons/links. */}
      {<SocialMediaLinks />}

      <Icon
        onClick={toggle}
        name={theme == "dark" ? "sun" : "moon"}
        className="theme-switcher"
      />
    </nav>
  );
};
