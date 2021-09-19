import React from "react"

import cl from "./BasketItem.module.scss"
const BasketItem = ({ cod, name, title, price, url, length, plusWineItem, minusWineItem }) => {
  const handlePlus = () => {
    plusWineItem(cod)
  }
  const handleMinus = () => {
    minusWineItem(cod)
  }
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
      <div className={cl.plusAndMin}>
        <p onClick={handlePlus} className={cl.math}>
          +
        </p>
        <p>{length}</p>
        <p onClick={handleMinus} className={cl.math}>
          -
        </p>
      </div>
    </div>
  )
}
export default BasketItem
