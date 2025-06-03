import React from 'react'
import { SimpleCard } from '../../../../components/common/home/Card/SimpleCard/SimpleCard'
import { AmountContactConfirmation } from '../../../../components/common/Remittance/AmountContactConfirmation/AmountContactConfirmation'
import { Carousel } from '../../../../components/layout/Carousel/Carousel'

export const AmountConfiguration = () => {
  return (
    <div className='remittance-step-container'>
      <h1>Monto / Cantidad</h1>
      <p>Ingresa los datos de tu envio de remesa correctos</p>
      <Carousel
        components = {[
          <div className='remittance-step-columns'>
            <AmountContactConfirmation/>
            <AmountContactConfirmation/>
          </div>,
          <div className='remittance-step-columns'>
            <AmountContactConfirmation/>
            <AmountContactConfirmation/>
          </div>,
          <div className='remittance-step-columns'>
            <AmountContactConfirmation/>
            <AmountContactConfirmation/>
          </div>,
        ]}
      />
      
    </div>
  )
}
