import './RemittanceFilters.css'
import { RemittanceList } from '../../../components/common/home/Remittances/RemittanceList/RemittanceList'

export const RemittanceFilters = () => {
  return (
    <div className='page-container'>
      <div className="remittance-filters-container">
        <RemittanceList/>
      </div>
    </div>
  )
}
