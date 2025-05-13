import { ProfileCard } from "../../components/home/ProfileCard/ProfileCard";
import { SecurityCard } from "../../components/home/SecurityCard/SecurityCard";
import SubNavbar from "../../components/home/SubNavbar/SubNavbar";
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
