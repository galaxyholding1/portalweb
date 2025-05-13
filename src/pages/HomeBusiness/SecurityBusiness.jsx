import { BalanceCard } from "../../components/home/BalanceCard/BalanceCard";
import { MovementCard } from "../../components/home/MovementCard/MovementCard";
import { RequestsCard } from "../../components/home/MyRequestsCard/RequestsCard";
import { SecurityCard } from "../../components/home/SecurityCard/SecurityCard";

import { SecurityCardLeft } from "../../components/home/SecurityCard/SecurityCardLeft";
import SubNavbar from "../../components/home/SubNavbar/SubNavbar";
import "../HomePeople/HomePeople.css";

export const SecurityBusiness = () => {
  return (
    <div className="page-container">
      <SubNavbar />
      <div className="dashboard-grid">
        <SecurityCardLeft />
        <div className="grid-area-applications">
          <SecurityCard />
        </div>
      </div>
    </div>
  );
};
