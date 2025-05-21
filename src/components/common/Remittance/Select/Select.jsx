import React from 'react'
import './Select.css'
// [
//   { label: "el label", value: "valor" }
// ]

export const Select = ({options, onChange, className}) => {
  const newClassName = className ? 'select-remittance ' + className : 'select-remittance'
  return (
    <select name="" id="" className={newClassName}>
      {options.map((option, index) => (
        <option key={index} value={option.value} onChange={onChange}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
