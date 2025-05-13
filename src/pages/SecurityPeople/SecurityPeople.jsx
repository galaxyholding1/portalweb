import { ProfileCard } from "../../components/home/ProfileCard/ProfileCard";
import { SecurityCard } from "../../components/home/SecurityCard/SecurityCard";
import "./SecurityPeople.css";

export const SecurityPeople = () => {
  return (
    <div className="security-page-container">
      <ProfileCard/>
      <SecurityCard/>
    </div>
  );
};
