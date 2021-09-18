import React from "react"

import CartButton from "../UI/CartButton"

import cl from "./CartPay.module.scss"
const CartPay = ({ totalPrice }) => {
  return (
    <div className={cl.cartPay}>
      <ul>
        <li>
          <p>Subtotal</p>
          <p>${totalPrice}</p>
        </li>
        <li>
          <p>Tax</p>
          <p>${totalPrice ? 2 : 0}</p>
        </li>
        <li>
          <p>Discount</p>
          <p>$0</p>
        </li>
      </ul>
      <div className={cl.payload}>
        <div className={cl.total}>
          <p>Total</p>
          <p>${totalPrice ? totalPrice + 2 : 0}</p>
        </div>
        <CartButton title={"Charge customer"} st />
      </div>
    </div>
  )
}

export default CartPay
