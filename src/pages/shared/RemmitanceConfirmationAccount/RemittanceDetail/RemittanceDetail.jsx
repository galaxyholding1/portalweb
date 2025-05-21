import React from 'react'
import { SimpleCard } from '../../../../components/common/home/Card/SimpleCard/SimpleCard'
import { CardHeader } from '../../../../components/common/home/Card/CardHeader/CardHeader'
import { ContactHeader } from '../../../../components/common/contact/ContactHeader/ContactHeader'
import { SaveButton } from '../../../../components/common/ui/Button/SaveButton'
import { CardMoments } from '../../../../components/common/home/Card/CardMoments'
import { MovementView } from '../../MovementView'
import { RemittanceTransaction } from '../../../../components/common/Remittance/RemittanceTransaction/RemittanceTransaction'





export const RemittanceDetail = () => {
  return (
    <SimpleCard className="remittance-detail-container">
      <ContactHeader/>
      <RemittanceTransaction/>
      <SaveButton/>
    </SimpleCard>
  )
}
