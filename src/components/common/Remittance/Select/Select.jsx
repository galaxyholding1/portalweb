import React from 'react'

// [
//   { label: "el label", value: "valor" }
// ]

export const Select = ({options, onChange}) => {
  return (
    <select name="" id="" className='select-remittance'>
      {options.map((option, index) => (
        <option key={index} value={option.value} onChange={onChange}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
