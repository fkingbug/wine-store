import React from 'react'
import cl from './TabsWine.module.scss'

export default React.memo(function TabsWine({ items, tabsActive, getActiveTabs }) {
  console.log('ререндер')
  return (
    <ul className={cl.tabs}>
      {items &&
        items.map((item, index) => (
          <li
            onClick={() => getActiveTabs(item)}
            className={`${cl.item} ${tabsActive === item ? cl.active : ''}`}>
            {item}
          </li>
        ))}
    </ul>
  )
})
