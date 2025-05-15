import "../../people/SecurityPeople/SecurityPeople.css";
import { ProfileCard } from "../../../components/common/home/ProfileCard/ProfileCard";
import SubNavbar from "../../../components/layout/Navbar/SubNavbar/SubNavbar";


export const SecurityBusiness = () => {
  return (
    <div className="page-container">
      <div className="security-page-container">
        <ProfileCard />
        <SecurityCard />
      </div>
    </div>
  );
};
