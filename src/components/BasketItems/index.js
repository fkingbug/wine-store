import React from "react"
import BasketItem from "../UI/BasketItem"

import cl from "./BasketItems.module.scss"

const BasketItems = ({ items, plusWineItem, minusWineItem }) => {
  const addedWines = Object.keys(items).map((key) => {
    return { ...items[key][0], length: items[key].length }
  })
  return (
    <div className={cl.basketItems}>
      {addedWines &&
        addedWines.map((item) => (
          <BasketItem
            key={item.name}
            {...item}
            plusWineItem={plusWineItem}
            minusWineItem={minusWineItem}
          />
        ))}
    </div>
  )
}

export default BasketItems
