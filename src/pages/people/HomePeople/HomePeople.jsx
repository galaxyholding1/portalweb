import { BalanceCard } from "../../../components/common/home/BalanceCard/BalanceCard";
import { MovementCard } from "../../../components/common/home/MovementCard/MovementCard";
import { RequestsCard } from "../../../components/common/home/MyRequestsCard/RequestsCard";
import { TransfersCard } from "../../../components/common/home/MyRequestsCard/TransfersCard";

import "./HomePeople.css";

export const HomePeople = () => {
  return (
    <div className="dashboard-grid">
      <BalanceCard />
      <MovementCard />
      <div className="grid-area-applications">
        <RequestsCard />
        <TransfersCard />
      </div>
    </div>
  );
};
