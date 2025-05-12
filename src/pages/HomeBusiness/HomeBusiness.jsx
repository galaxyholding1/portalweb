import { BalanceCard } from "../../components/home/BalanceCard/BalanceCard";
import { MovementCard } from "../../components/home/MovementCard/MovementCard";
import { RequestsCard } from "../../components/home/MyRequestsCard/RequestsCard";
import SubNavbar from "../../components/home/SubNavbar/SubNavbar";
import "../HomePeople/HomePeople.css";

export const HomeBusiness = () => {
  return (
    <div className="page-container">
      <SubNavbar />
      <div className="dashboard-grid">
        <BalanceCard />
        <MovementCard />
        <div className="grid-area-applications">
          <RequestsCard />
        </div>
      </div>
    </div>
  );
};
