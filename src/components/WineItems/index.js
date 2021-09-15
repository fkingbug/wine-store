import React from "react"

import WinItem from "../UI/WinItem"
import cl from "./WineItems.module.scss"
const WineItems = ({ wines }) => {
  return <div className={cl.wineItems}>{wines && wines.map(item => <WinItem {...item} />)}</div>
}

export default WineItems
