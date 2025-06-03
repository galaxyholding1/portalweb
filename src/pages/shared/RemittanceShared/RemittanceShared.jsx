import './RemittanceShared.css'
import { RemittanceInformation } from '../../../components/common/Remittance/RemittanceInformation/RemittanceInformation'
import { RemittanceListPreview } from '../../../components/common/home/Remittances/RemittanceList/RemittanceListPreview'

export const RemittanceShared = () => {
  return (
    <div className="remittance-shared-container">
      <RemittanceInformation/>
      <RemittanceListPreview />
    </div>
  )
}
