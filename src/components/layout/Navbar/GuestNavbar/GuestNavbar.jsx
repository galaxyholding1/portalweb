import { Link, useLocation } from "react-router";
import { SocialMediaLinks } from "../../../common/SocialMediaLinks/SocialMediaLinks";

// Defines the navigation links for the secondary navbar.
const secondaryLinks = [
  { name: "Personas", path: "/" },
  { name: "Negocios", path: "/home-empresas" },
  { name: "Corporativos", path: "/corporativos" },
  { name: "Negocios especializados", path: "/especializados" },
];

export const GuestNavbar = () => {
  // `useLocation` hook from React Router provides access to the current location object,
  // from which `pathname` (the current URL path) is extracted.
  const { pathname } = useLocation();

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
      { <SocialMediaLinks/> }
    </nav>
  );
};