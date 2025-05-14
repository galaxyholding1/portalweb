
import { ProfileCard } from "../../../components/common/home/ProfileCard/ProfileCard";
import { SecurityCard } from "../../../components/common/home/SecurityCard/SecurityCard";
import SubNavbar from "../../../components/common/home/SubNavbar/SubNavbar";
import "./SecurityPeople.css";

export const SecurityPeople = () => {
  return (
    <div className="page-container">
      <SubNavbar />
      <div className="security-page-container">
        <ProfileCard />
        <SecurityCard />
      </div>
    </div>
  );
};
