import React from "react"

import cl from "./CartButton.module.scss"

const CartButton = ({ title, st, clearWineCart }) => {
  return (
    <button onClick={clearWineCart} className={`${st ? cl.payLoad : cl.clear}`}>
      {title}
    </button>
  )
}

export default CartButton
