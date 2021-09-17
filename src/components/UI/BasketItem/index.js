import React from "react"

import cl from "./BasketItem.module.scss"
const BasketItem = ({ name, title, price, url }) => {
  return (
    <div className={cl.item}>
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

export default BasketItem
