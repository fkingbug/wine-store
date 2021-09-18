import React, { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { fetchWines } from "../../store/action/wine"
import { addWineCart } from "../../store/action/cart"

import WinItem from "../UI/WinItem"
import cl from "./WineItems.module.scss"

const WineItems = () => {
  const dispatch = useDispatch()
  const wines = useSelector((state) => state.wine.items)
  const { category, searchWine } = useSelector((state) => state.filter)

  useEffect(() => {
    dispatch(fetchWines(category, searchWine))
  }, [category, searchWine, dispatch])

  const addWine = (obj) => {
    dispatch(addWineCart(obj))
  }

  return (
    <div className={cl.wineItems}>
      {wines &&
        wines.map((item, index) => (
          <WinItem addWine={addWine} key={`${item}_${index}`} {...item} />
        ))}
    </div>
  )
}

export default WineItems
