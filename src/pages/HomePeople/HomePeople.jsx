import { BalanceCard } from '../../components/home/BalanceCard/BalanceCard';
import { MovementCard } from '../../components/home/MovementCard/MovementCard';
import SubNavbar from '../../components/home/SubNavbar/SubNavbar';
import './HomePeople.css';

export const HomePeople = () => {
  return (
    <div className='page-container'>
      <SubNavbar/>
      <div className='dashboard-grid'>
        <BalanceCard/>
        <MovementCard/>
        <div className='grid-area-applications'></div>
      </div>
    </div>
  )
}
