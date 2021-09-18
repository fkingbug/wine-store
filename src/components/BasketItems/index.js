import React from "react"
import BasketItem from "../UI/BasketItem"

import cl from "./BasketItems.module.scss"

const items = {
  color: "red",
  name: "Ken Wright Guadalupe",
  title: "PINOT NOIR",
  price: 99,
  url: "https://res.cloudinary.com/dqnv3y6ob/image/asset/c_scale,h_480,q_auto/v1619616191/products/531241.png",
}

const BasketItems = () => {
  return (
    <div className={cl.basketItems}>
      <BasketItem {...items} />
      <BasketItem {...items} />
    </div>
  )
}

export default BasketItems
