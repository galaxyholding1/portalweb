import React from 'react'
import './SimpleCard.css'

export const SimpleCard = ({children, className}) => {
  const classes = className ? `simple-card-container ${className}` : 'simple-card-container'
  return (
    <div className={classes}>{children}</div>
  )
}
