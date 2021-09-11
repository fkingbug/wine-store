import React from 'react'

import Header from '../Header'
import FindWine from '../FindWine'

import cl from './Main.module.scss'

const Main = () => {
  return (
    <div className={cl.main}>
      <Header />
      <FindWine />
    </div>
  )
}

export default Main
