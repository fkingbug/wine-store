import React from "react"

import cl from "./CartButton.module.scss"
console.log(cl.payLoad)
const CartButton = ({ title, st }) => {
  return <button className={`${st ? cl.payLoad : cl.clear}`}>{title}</button>
}

export default CartButton
