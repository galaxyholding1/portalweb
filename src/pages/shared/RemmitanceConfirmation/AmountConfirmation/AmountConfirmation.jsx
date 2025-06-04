import React from 'react'
import { SimpleCard } from '../../../../components/common/home/Card/SimpleCard/SimpleCard'
import { AmountContactConfirmation } from '../../../../components/common/Remittance/AmountContactConfirmation/AmountContactConfirmation'
import { RemittanceForm } from '../../../../components/common/home/Remittances/RemittanceForm'
import { RemmitanceConfirmationItem } from '../../../../components/common/home/RemmitanceConfirmationItem/RemmitanceConfirmationItem'

// Son la confirmación del proceso de personas.
export const AmountConfirmation = () => {
  return (
    <div className='remittance-step-container'>
      <h1>Revisión y confirmación</h1>
      <p>Confirma que los datos que agregaste esten correctos antes de hacer el envío</p>
      {/* Es una grilla que divide su espacio en dos. */}
      <div className='remittance-step-columns' style={{maxHeight: 200 }}>
        <RemmitanceConfirmationItem/>
        <RemmitanceConfirmationItem/>
      </div>
    </div>
  )
}
