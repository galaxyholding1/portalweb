import { BalanceCard } from "../../../components/common/home/BalanceCard/BalanceCard";
import { MovementCard } from "../../../components/common/home/MovementCard/MovementCard";
import { MovementCardPreview } from "../../../components/common/home/MovementCardPreview/MovementCardPreview";
import { RequestsCard } from "../../../components/common/home/MyRequestsCard/RequestsCard";
import { TransfersCard } from "../../../components/common/home/MyRequestsCard/TransfersCard";
import "../../people/HomePeople/HomePeople.css";

export const HomeBusiness = () => {
  return (
    <div className="dashboard-grid">
      <BalanceCard />
      <MovementCardPreview />
      <div className="grid-area-applications">
        <RequestsCard />
        <TransfersCard />
      </div>
    </div> 
  );
};
