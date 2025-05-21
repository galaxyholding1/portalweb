import React from 'react'
import { SimpleCard } from '../../../../components/common/home/Card/SimpleCard/SimpleCard'
import { AmountContactConfirmation } from '../../../../components/common/Remittance/AmountContactConfirmation/AmountContactConfirmation'
import { RemittanceForm } from '../../../../components/common/home/Remittances/RemittanceForm'
import { RemmitanceConfirmationItem } from '../../../../components/common/home/RemmitanceConfirmationItem/RemmitanceConfirmationItem'
import { Select } from '../../../../components/common/Remittance/Select/Select'
import { RemittanceConfirmation } from '../../../../components/common/Remittance/RemittanceConfirmation/RemittanceConfirmation'

export const AmountConfirmation = () => {
  return (
    <div className='remittance-step-container'>
      <RemittanceConfirmation></RemittanceConfirmation>
      <Select
        options={[
          { label: "el label", value: "valor" },
          { label: "el label 2", value: "valor 2" },
        ]}
      />
    </div>
  )
}
