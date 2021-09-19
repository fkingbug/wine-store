import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearWineCart, plusCartItem, minusCartItem } from "../../store/action/cart"

import BasketHed from "../BasketHed"
import BasketItems from "../BasketItems"
import CartPay from "../CartPay"
import cl from "./Basket.module.scss"

const Basket = () => {
  const dispatch = useDispatch()
  const { totalPrice, items } = useSelector((state) => state.cart)

  const clearCartItems = () => dispatch(clearWineCart())
  const plusWineItem = (cod) => dispatch(plusCartItem(cod))
  const minusWineItem = (cod) => dispatch(minusCartItem(cod))
  return (
    <div className={cl.basket}>
      <BasketHed clearWineCart={clearCartItems} />
      <BasketItems items={items} plusWineItem={plusWineItem} minusWineItem={minusWineItem} />
      <CartPay totalPrice={totalPrice} clearWineCart={clearCartItems} />
    </div>
  )
}

export default Basket
