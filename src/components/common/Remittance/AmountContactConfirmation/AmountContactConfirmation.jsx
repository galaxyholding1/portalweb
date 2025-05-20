import React from 'react'
import { SimpleCard } from '../../home/Card/SimpleCard/SimpleCard'
import { ContactHeader } from '../../contact/ContactHeader/ContactHeader'
import { Input } from '../Input/Input'

export const AmountContactConfirmation = () => {
  return (
    <SimpleCard>
      <ContactHeader/>
      <Input placeholder="Monto a enviar"/>
      <Input placeholder="Monto a enviar"/>
      <Input placeholder="Monto a enviar"/>
      <Input placeholder="Monto a enviar"/>
      <div>
        <p>Pais: Colombia</p>
        <p>Moneda: COF</p>
        <p>Cambio: 1 USD = 970 ARS</p>
        <p>Tasa de red: 1,45%</p>
        <p>Tiempo estimado 9 seg.</p>
      </div>
    </SimpleCard>
  )
}
