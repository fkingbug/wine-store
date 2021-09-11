import React from 'react'

import cl from './Header.module.scss'
const Header = () => {
  return (
    <div className={cl.header}>
      <div className={cl.headerContent}>
        <h1>Wine & FkingBug Team</h1>
        <p>Github : @fkingbug</p>
      </div>
      <div className={cl.theme}></div>
    </div>
  )
}

export default Header
