import React from 'react'
import cl from './TabsWine.module.scss'

const TabsWine = ({ items, tabsActive, getActiveTabs }) => {
  return (
    <ul className={cl.tabs}>
      {items &&
        items.map((item, index) => (
          <li
            onClick={() => getActiveTabs(index)}
            className={`${cl.item} ${tabsActive === index ? cl.active : ''}`}>
            {item}
          </li>
        ))}
    </ul>
  )
}

export default TabsWine
