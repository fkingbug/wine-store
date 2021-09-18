import React from "react"

import cl from "./WinItem.module.scss"

const WinItem = ({ cod, color, name, title, price, url, addWine }) => {
  const handleClick = () => addWine({ cod, color, name, title, price, url })

  return (
    <div className={cl.item} onClick={handleClick}>
      <div className={cl.wineImg}>
        <img src={url} alt="" />
      </div>
      <div className={cl.desc}>
        <p className={cl.name}>{name}</p>
        <p className={cl.title}>{title}</p>
        <p className={cl.price}>${price}</p>
      </div>
    </div>
  )
}

export default WinItem
