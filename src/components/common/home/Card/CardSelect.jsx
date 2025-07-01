import React from 'react'
import { MovementsHeader } from './CardHeader/MovementsHeader'
import { CardSelectHeader } from './CardHeader/CardSelectHeader'

export const CardSelect = ({ children, icon, title, morePath }) => {
  /**
   * Renders a card with a header and content.
   */
  return (
    <div className="card-container">
      <CardSelectHeader icon={icon} title={title} morePath={morePath} />
      <div className="card-content">{children}</div>
    </div>
  )
}
