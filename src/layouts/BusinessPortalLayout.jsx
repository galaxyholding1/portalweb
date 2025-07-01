import SubNavbar from "../components/layout/Navbar/SubNavbar/SubNavbar";

// Author: Juan Ayala
// This layout centralizes the style for the business portal
export const BusinessPortalLayout = ({children}) => {
  return (
    <div className="page-container">
      <SubNavbar />
      { children }
    </div>
  );
};