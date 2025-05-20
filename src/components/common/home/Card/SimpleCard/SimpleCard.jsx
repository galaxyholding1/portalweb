import React from 'react'
import './SimpleCard.css'

export const SimpleCard = ({children}) => {
  return (
    <div className='simple-card-container'>{children}</div>
  )
}
