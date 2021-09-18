import React from "react"

import CartButton from "../UI/CartButton"
import cl from "./BasketHed.module.scss"

const BasketHed = ({ clearWineCart }) => {
  return (
    <div className={cl.basketHed}>
      <h1>Cart</h1>
      <CartButton clearWineCart={clearWineCart} title={"Clear"} />
    </div>
  )
}

export default BasketHed
