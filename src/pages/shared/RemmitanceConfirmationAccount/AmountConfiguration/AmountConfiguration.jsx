import React from 'react'
import { SimpleCard } from '../../../../components/common/home/Card/SimpleCard/SimpleCard'
import { AmountContactConfirmation } from '../../../../components/common/Remittance/AmountContactConfirmation/AmountContactConfirmation'

export const AmountConfiguration = () => {
  return (
    <div className='remittance-step-container'>
      <h1>Monto / Cantidad</h1>
      <p>Cambios</p>
      <div className='remittance-step-columns'>
        <AmountContactConfirmation/>
        <AmountContactConfirmation/>
      </div>
    </div>
  )
}
