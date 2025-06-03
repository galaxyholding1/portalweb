import React, { useState } from 'react'
import './Select.css'
import { Icon } from '../../ui/Icon/Icon'

export const Select = ({options, onChange, className, placeholder}) => {
  const newClassName = className ? 'custom-select-container ' + className : 'custom-select-container'
  const [open, setOpen] = useState(false);
  const handleChange = (e) => {
    setOpen(!open);
    if (onChange) {
      onChange(e);
    }

  }
  return (
    <label className={newClassName}>
      <select name="" id="" className="select-remittance" value={null} onClick={handleChange}>
        {placeholder && <option value={null} disabled selected>{placeholder}</option>}
        {options.map((option, index) => (
          <option key={index} value={option.value} onChange={onChange}>
            {option.label}
          </option>
        ))}
      </select>
      <Icon name="chevron_down" width={20} className={open ? "reverse" : ''}/>
    </label>
  )
}
