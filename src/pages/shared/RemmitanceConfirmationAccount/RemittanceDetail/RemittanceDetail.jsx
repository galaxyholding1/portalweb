import React from 'react'
import { SimpleCard } from '../../../../components/common/home/Card/SimpleCard/SimpleCard'
import { CardHeader } from '../../../../components/common/home/Card/CardHeader/CardHeader'
import { ContactHeader } from '../../../../components/common/contact/ContactHeader/ContactHeader'
import { SaveButton } from '../../../../components/common/ui/Button/SaveButton'

export const RemittanceDetail = () => {
  return (
    <SimpleCard className="remittance-detail-container">
      <ContactHeader/>
      <div>
        {/* Sisas, acá */}
      </div>
      <SaveButton/>
    </SimpleCard>
  )
}
