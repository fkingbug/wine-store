import React from "react"
import CartButton from "../UI/CartButton"

import cl from "./CartPay.module.scss"
const CartPay = () => {
  return (
    <div className={cl.cartPay}>
      <ul>
        <li>
          <p>Subtotal</p>
          <p>$96</p>
        </li>
        <li>
          <p>Tax</p>
          <p>$2</p>
        </li>
        <li>
          <p>Discount</p>
          <p>$0</p>
        </li>
      </ul>
      <div className={cl.payload}>
        <div className={cl.total}>
          <p>Total</p>
          <p>$98</p>
        </div>
        <CartButton title={"Charge customer"} st />
      </div>
    </div>
  )
}

export default CartPay
