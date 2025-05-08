import "./Navbar.css";

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import facebookIcon from "../../assets/images/SVG/facebook-icon.svg";
import instagramIcon from "../../assets/images/SVG/instagram-icon.svg";
import xIcon from "../../assets/images/SVG/x-icon.svg";
import { useTheme } from "../../store/theme-store";
import { iconByTheme } from "../../util/app-icon-by-theme";

const noLinksPaths = [
  "/login-personas",
  "/login-",
]

const linksSelect = [
  { name: "Negocios especializados", path: "/" },
  { name: "Sucursal Personas", path: "/login-personas" },
  { name: "Sucursal Empresas", path: "/login-empresas" },
];

const navItems = [
  { name: "Inicio", path: "/" },
  { name: "Necesidades", path: "/necesidades" },
  { name: "Productos y Servicios", path: "/productos" },
  { name: "Educación financiera", path: "/educacion" },
];

const secondaryLinks = [
  { name: "Personas", path: "/" },
  { name: "Negocios", path: "/home-empresas" },
  { name: "Corporativos", path: "/corporativos" },
  { name: "Negocios especializados", path: "/especializados" },
];

const socialIcons = [
  { imgPath: facebookIcon, href: "/" },
  { imgPath: instagramIcon, href: "/" },
  { imgPath: xIcon, href: "/" },
];

export const Navbar = () => {
  const { pathname } = useLocation();

  const haveSelectedLink = linksSelect
    .map((link) => link.path)
    .includes(pathname);

  const enableLinks = !noLinksPaths.includes( pathname );
  const [selectedLink, setSelectedLink] = useState(
    haveSelectedLink ? pathname : "/"
  );

  const { theme } = useTheme();

  return (
    <>
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

        {socialIcons.map(({ href, imgPath }, i) => (
          <a href={href} key={i + href}>
            <img src={imgPath} alt={""} className="social-media-icon" />
          </a>
        ))}
      </nav>
      <nav className="navbar-galaxy">
        <a href="/">
          <img src={iconByTheme[theme]} alt="logo" />
        </a>

        {enableLinks && (
          <>
            <ul>
              {navItems.map(({ name, path }, i) => (
                <Link
                  to={path}
                  key={i + path}
                  className={pathname == path ? "active-item" : ""}
                >
                  {name}
                </Link>
              ))}
            </ul>

            <div>
              <select
                name=""
                id=""
                value={selectedLink}
                onChange={(a) => setSelectedLink(a.target.value)}
              >
                {linksSelect.map(({ path, name }, i) => (
                  <option value={path} key={i + path}>
                    {name}
                  </option>
                ))}
              </select>

              <Link to={selectedLink} className="btn-go-login">
                Entrar
              </Link>
            </div>
          </>
        )}
      </nav>
    </>
  );
};
