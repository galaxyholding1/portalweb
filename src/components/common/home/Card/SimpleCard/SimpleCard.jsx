import React from 'react'
import './SimpleCard.css'

export const SimpleCard = ({children, className}) => {
  // Combines the base class 'simple-card-container' with any provided 'className'.
  const classes = className ? `simple-card-container ${className}` : 'simple-card-container'
  
  return (
    <div className={classes}>{children}</div>
  )
}