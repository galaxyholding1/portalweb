import React from 'react'
import { SimpleCard } from '../../../../components/common/home/Card/SimpleCard/SimpleCard'
import { CardHeader } from '../../../../components/common/home/Card/CardHeader/CardHeader'
import { ContactHeader } from '../../../../components/common/contact/ContactHeader/ContactHeader'
import { SaveButton } from '../../../../components/common/ui/Button/SaveButton'
import { Button } from '../../../../components/common/ui/Button/Button'
import { Icon } from '../../../../components/common/ui/Icon/Icon'

export const RemittanceDetail = () => {
  return (
    <SimpleCard className="remittance-detail-container">
      <div className='remittance-detail-header'>
        <ContactHeader/>
        <h1>Monto: 80,00 VEF</h1>
        <Icon name='bdgeOk' width={25}/>
      </div>
      <div>
        {/* Sisas, acá */}
      </div>
      <Button 
        icon={<Icon name='printer'/>}
        className="remittance-detail-button"
      >
        Descargar PDF
      </Button>
    </SimpleCard>
  )
}
