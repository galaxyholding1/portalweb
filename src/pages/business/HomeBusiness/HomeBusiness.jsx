import { BalanceCard } from "../../../components/common/home/BalanceCard/BalanceCard";
import { MovementCard } from "../../../components/common/home/MovementCard/MovementCard";
import { RequestsCard } from "../../../components/common/home/MyRequestsCard/RequestsCard";

import "../../people/HomePeople/HomePeople.css";

export const HomeBusiness = () => {
  return (
    <div className="dashboard-grid">
      <BalanceCard />
      <MovementCard />
      <div className="grid-area-applications">
        <RequestsCard />
      </div>
    </div>
  );
};
