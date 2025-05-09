import { BalanceCard } from '../../components/ui/home/BalanceCard';
import { MovementCard } from '../../components/ui/home/MovementCard';
import './HomePeople.css';

export const HomePeople = () => {
  return (
    <div className='page-container'>
      <div className='dashboard-grid'>
        <BalanceCard/>
        <MovementCard/>
        <div className='grid-area-applications'/>
      </div>
    </div>
  )
}
