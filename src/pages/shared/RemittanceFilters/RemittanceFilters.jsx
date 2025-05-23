import './RemittanceFilters.css'
import { RemittanceList } from '../../../components/common/home/Remittances/RemittanceList/RemittanceList'
import { RemittanceInformation } from '../../../components/common/Remittance/RemittanceInformation/RemittanceInformation'

export const RemittanceFilters = () => {
  return (
    <div className='page-container'>
      <div className="remittance-filters-container">
        <RemittanceList/>
        <RemittanceInformation/>
      </div>
    </div>
  )
}
