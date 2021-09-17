import React from "react"

import BasketHed from "../BasketHed"
import BasketItems from "../BasketItems"
import CartPay from "../CartPay"
import cl from "./Basket.module.scss"

const Basket = () => {
  return (
    <div className={cl.basket}>
      <BasketHed />
      <BasketItems />
      <CartPay />
    </div>
  )
}

export default Basket
