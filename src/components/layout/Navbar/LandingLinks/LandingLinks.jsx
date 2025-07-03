import { useState } from "react";
import { Link, useLocation } from "react-router";

// Defines the main navigation items for the landing page.
const navItems = [
  { name: "Inicio", path: "/" }, // "Home"
  { name: "Necesidades", path: null }, // "Needs"
  { name: "Productos y Servicios", path: null }, // "Products and Services"
  { name: "Educación financiera", path: null }, // "Financial Education"
];

// Defines the options for the dropdown select, typically leading to different login or specialized sections.
const linksSelect = [
  { name: "Negocios especializados", path: "/" }, // "Specialized Business" - Note: path '/' might conflict with 'Inicio'
  { name: "Personas", path: "/login-personas" }, // "People Branch"
  { name: "Empresas", path: "/login-empresas" }, // "Business Branch"
];

export const LandingLinks = () => {
  // `useLocation` hook from React Router provides access to the current location object,
  // from which `pathname` (the current URL path) is extracted.
  const { pathname } = useLocation();

  // Checks if the current `pathname` is one of the paths defined in `linksSelect`.
  const haveSelectedLink = linksSelect
    .map((link) => link.path)
    .includes(pathname);

  // State to manage the currently selected value in the dropdown.
  // Initializes `selectedLink` to the current `pathname` if it's one of the select options, otherwise defaults to "/".
  const [selectedLink, setSelectedLink] = useState(
    haveSelectedLink ? pathname : "/"
  );

  return (
    <>
      {/* List of main navigation links */}
      <ul>
        {navItems.map(({ name, path }, i) => (
          <Link
            to={path} // The destination path for the link.
            key={i + path} // Unique key for each link.
            // Applies the "active-item" class if the current pathname matches the link's path.
            className={pathname == path ? "active-item" : ""}
          >
            {name} {/* The display name for the link. */}
          </Link>
        ))}
      </ul>

      {/* Dropdown select and "Entrar" button */}
      <div>
        <select
          name="" // Consider adding a meaningful name attribute for forms.
          id=""   // Consider adding a unique ID for accessibility.
          value={selectedLink} // Controls the selected value of the dropdown.
          onChange={(e) => setSelectedLink(e.target.value)} // Updates the selected link state when an option is chosen.
        >
          {/* Maps through `linksSelect` to create options for the dropdown. */}
          {linksSelect.map(({ path, name }, i) => (
            <option value={path} key={i + path}>
              {name}
            </option>
          ))}
        </select>

        {/* Button to navigate to the `selectedLink` path. */}
        <Link to={selectedLink} className="btn-go-login">
          Entrar {/* "Enter" / "Login" */}
        </Link>
      </div>
    </>
  );
};