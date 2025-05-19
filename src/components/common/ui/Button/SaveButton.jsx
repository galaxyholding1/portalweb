import React from 'react'
import { Icon } from '../Icon/Icon'
import './SaveButton.css'

export const SaveButton = () => {
  return (
    <button className="button-save">
      <Icon name='save' />
      Guardar
    </button>
  )
}
