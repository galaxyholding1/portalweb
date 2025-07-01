import './RemittanceShared.css'
import { RemittanceInformation } from '../../../components/common/Remittance/RemittanceInformation/RemittanceInformation'
import { RemittanceListPreview } from '../../../components/common/home/Remittances/RemittanceList/RemittanceListPreview'

/* Una grilla que divide el espacio vertical en dos. */
export const RemittanceShared = () => {
  return (
    <div className="remittance-shared-container">
      <RemittanceInformation/>
      <RemittanceListPreview />
    </div>
  )
}
