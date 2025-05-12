import { Link, useLocation } from "react-router";
import { SocialMediaLinks } from "../../common/SocialMediaLinks";

const secondaryLinks = [
  { name: "Personas", path: "/" },
  { name: "Negocios", path: "/home-empresas" },
  { name: "Corporativos", path: "/corporativos" },
  { name: "Negocios especializados", path: "/especializados" },
];

export const GuestNavbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="navbar-galaxy-secondary">
      {secondaryLinks.map(({ name, path }, i) => (
        <Link
          to={path}
          key={i + path}
          className={pathname == path ? "active-item" : ""}
        >
          {name}
        </Link>
      ))}

      { <SocialMediaLinks/> }
    </nav>
  );
};
