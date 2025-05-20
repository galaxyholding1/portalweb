import React from 'react'
import { SimpleCard } from '../../../../components/common/home/Card/SimpleCard/SimpleCard'
import { AmountContactConfirmation } from '../../../../components/common/Remittance/AmountContactConfirmation/AmountContactConfirmation'
import { RemittanceForm } from '../../../../components/common/home/Remittances/RemittanceForm'
import { RemmitanceConfirmationItem } from '../../../../components/common/home/RemmitanceConfirmationItem/RemmitanceConfirmationItem'

export const AmountConfirmation = () => {
  return (
    <div className='remittance-step-container'>
      <h1>Revisión y confirmación</h1>
      <p>Confirma que los datos que agregaste esten correctos antes de hacer el envío</p>
      <div className='remittance-step-columns'>
        <RemmitanceConfirmationItem/>
        <RemmitanceConfirmationItem/>
      </div>
    </div>
  )
}
