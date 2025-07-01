import SubNavbar from "../components/layout/Navbar/SubNavbar/SubNavbar";

// Author: Juan Ayala
// This layout centralizes the style for the people portal
export const PersonPortalLayout = ({ children }) => {
  return (
    <div className="page-container">
      <SubNavbar />
      { children }
    </div>
  );
};