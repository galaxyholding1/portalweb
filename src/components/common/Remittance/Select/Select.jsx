import React from 'react'
import './Select.css'

export const Select = ({options, onChange, className, placeholder}) => {
  const newClassName = className ? 'select-remittance ' + className : 'select-remittance'
  return (
    <select name="" id="" className={newClassName} value={null}>
      {placeholder && <option value={null} disabled selected>{placeholder}</option>}
      {options.map((option, index) => (
        <option key={index} value={option.value} onChange={onChange}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
