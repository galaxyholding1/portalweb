import "./Navbar.css";

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

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
]

const socialIcons = [
  { imgPath: "/facebook-icon.svg", href: "/" },
  { imgPath: "/instagram-icon.svg", href: "/" },
  { imgPath: "/x-icon.svg", href: "/" },
]

export const Navbar = () => {
  const { pathname } = useLocation();
  const haveSelectedLink = linksSelect.map( link => link.path ).includes( pathname );
  const [selectedLink, setSelectedLink] = useState( haveSelectedLink ? pathname :  "/");

  return (
    <>
      <nav className="navbar-galaxy-secondary">
        {secondaryLinks.map(({ name, path }) => (
          <Link
            to={path}
            key={path}
            className={pathname == path ? "active-item" : ""}
          >
            {name}
          </Link>
        ))}

        {socialIcons.map(({href, imgPath}) => (
          <a href={href}>
            <img src={imgPath} alt={imgPath.replace('.svg', '')} key={imgPath + href} className='social-media-icon'/>
          </a>
        ))}
      </nav>
      <nav className="navbar-galaxy">
        <img src="/logo-navbar.svg" alt="logo" />

        <ul>
          {navItems.map(({ name, path }) => (
            <Link
              to={path}
              key={path}
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
            {linksSelect.map(({ path, name }) => (
              <option value={path} key={path}>
                {name}
              </option>
            ))}
          </select>

          <a href={selectedLink} className="btn-go-login">
            Entrar
          </a>
        </div>
      </nav>
    </>
  );
};
