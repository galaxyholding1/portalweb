// Imports specific styles for this component
import './RemittanceFilters.css'

// Imports the list of remittances, probably with filters or results
import { RemittanceList } from '../../../components/common/home/Remittances/RemittanceList/RemittanceList'

// Imports the informative remittance component, with visual option cards
import { RemittanceInformation } from '../../../components/common/Remittance/RemittanceInformation/RemittanceInformation'

// Main component representing the remittance filters and sending options view
export const RemittanceFilters = () => {
  return (
    // General page container
    <div className='page-container'>
      {/* Container with grid to display filters and options in parallel */}
      <div className="remittance-filters-container">
        {/* Remittance list with filterable options */}
        <RemittanceList/>

        {/* Visual information about money sending methods */}
        <RemittanceInformation/>
      </div>
    </div>
  )
}