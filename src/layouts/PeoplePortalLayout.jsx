import SubNavbar from "../components/layout/Navbar/SubNavbar/SubNavbar";

export const PersonPortalLayout = ({ children }) => {
  return (
    <div className="page-container">
      <SubNavbar />
      { children }
    </div>
  );
};
