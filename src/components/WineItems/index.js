import React from 'react'

import WinItem from '../UI/WinItem'
import cl from './WineItems.module.scss'
const WineItems = () => {
  return (
    <div className={cl.wineItems}>
      {[1, 2, 3, 4, 5, 6].map(items => (
        <WinItem />
      ))}
    </div>
  )
}

export default WineItems
