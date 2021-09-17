import React from "react"

import cl from "./CartButton.module.scss"

const CartButton = ({ title, st }) => {
  return <button className={`${st ? cl.payLoad : cl.clear}`}>{title}</button>
}

export default CartButton
