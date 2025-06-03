import SubNavbar from "../components/layout/Navbar/SubNavbar/SubNavbar";


export const BusinessPortalLayout = ({children}) => {
  return (
    <div className="page-container">
      <SubNavbar />
      { children }
    </div>
  );
};
