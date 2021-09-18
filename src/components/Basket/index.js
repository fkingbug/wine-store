import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearWineCart } from "../../store/action/cart"

import BasketHed from "../BasketHed"
import BasketItems from "../BasketItems"
import CartPay from "../CartPay"
import cl from "./Basket.module.scss"

const Basket = () => {
  const dispatch = useDispatch()
  const { totalPrice, items } = useSelector((state) => state.cart)

  const clearCartItems = () => dispatch(clearWineCart())
  return (
    <div className={cl.basket}>
      <BasketHed clearWineCart={clearCartItems} />
      <BasketItems items={items} />
      <CartPay totalPrice={totalPrice} />
    </div>
  )
}

export default Basket
