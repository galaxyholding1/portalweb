import React from 'react'
import { Icon } from '../Icon/Icon'
import './Button.css'

/**
 * SaveButton Component
 */
export const SaveButton = () => {
  return (
    <button className="button save">
      <Icon name='save' />
      Guardar {/* "Save" */}
    </button>
  )
}