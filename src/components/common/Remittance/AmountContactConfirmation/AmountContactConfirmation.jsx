import React from 'react'
import { SimpleCard } from '../../home/Card/SimpleCard/SimpleCard'
import { ContactHeader } from '../../contact/ContactHeader/ContactHeader'
import { Input } from '../Input/Input'
import { Select } from '../Select/Select'

export const AmountContactConfirmation = () => {
  return (
    <SimpleCard>
      <ContactHeader/>
      <Input placeholder="Monto a enviar"/>
      <Select options={[
        { value: '1', label: 'Colombia' },
        { value: '2', label: 'Venezuela' },
        { value: '3', label: 'España' },
      ]} placeholder="País"/>
      <Select options={[
        { value: '1', label: 'COP' },
        { value: '2', label: 'VEN' },
        { value: '3', label: 'EUR' },
      ]} placeholder="Moneda"/>
      <Select options={[
        { value: '1', label: '?' },
        { value: '2', label: '?' },
      ]} placeholder="Tipo de remesa"/>
      

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
