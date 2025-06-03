import SubNavbar from "../components/layout/Navbar/SubNavbar/SubNavbar";

// Author: Juan Ayala
// Este layout centraliza el estilo para el portal de personas
export const BusinessPortalLayout = ({children}) => {
  return (
    <div className="page-container">
      <SubNavbar />
      { children }
    </div>
  );
};
