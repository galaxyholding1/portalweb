import { useState } from "react";
import { Link, useLocation } from "react-router";

const navItems = [
  { name: "Inicio", path: "/" },
  { name: "Necesidades", path: "/necesidades" },
  { name: "Productos y Servicios", path: "/productos" },
  { name: "Educación financiera", path: "/educacion" },
];

const linksSelect = [
  { name: "Negocios especializados", path: "/" },
  { name: "Sucursal Personas", path: "/login-personas" },
  { name: "Sucursal Empresas", path: "/login-empresas" },
];

export const LandingLinks = () => {
  const { pathname } = useLocation();

  const haveSelectedLink = linksSelect
    .map((link) => link.path)
    .includes(pathname);

  const [selectedLink, setSelectedLink] = useState(
    haveSelectedLink ? pathname : "/"
  );
  return (
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
  );
};
