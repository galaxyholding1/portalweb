import React from 'react'
import { Icon } from '../Icon/Icon'
import './Button.css'

export const SaveButton = () => {
  return (
    <button className="button save">
      <Icon name='save' />
      Guardar
    </button>
  )
}
