import SubNavbar from "../components/common/home/SubNavbar/SubNavbar";

export const PersonPortalLayout = ({ children }) => {
  return (
    <div className="page-container">
      <SubNavbar />
      { children }
    </div>
  );
};
