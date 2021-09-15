import React, { useEffect } from 'react'

import Header from '../Header'
import FindWine from '../FindWine'
import WineItems from '../WineItems'

import { fetchWines } from '../../store/action/wine'
import { useDispatch, useSelector } from 'react-redux'
import { setWineCategory, setSearch } from '../../store/action/filter'

import cl from './Main.module.scss'

const categoryWine = ['All', 'Red', 'White', 'Rose', 'Sparking', 'Dessert']

const Main = () => {
  const dispatch = useDispatch()
  const wines = useSelector(state => state.wine.items)
  const { category, searchWine } = useSelector(state => state.filter)

  const getActiveTabs = React.useCallback(
    item => {
      dispatch(setWineCategory(item))
    },
    [categoryWine],
  )
  const getSearchWine = item => {
    dispatch(setSearch(item))
  }
  useEffect(() => {
    dispatch(fetchWines(category, searchWine))
  }, [])
  useEffect(() => {
    dispatch(fetchWines(category, searchWine))
  }, [category, searchWine])

  return (
    <div className={cl.main}>
      <Header />
      <FindWine
        categoryWine={categoryWine}
        category={category}
        searchWine={searchWine}
        getActiveTabs={getActiveTabs}
        getSearchWine={getSearchWine}
      />
      <WineItems wines={wines} />
    </div>
  )
}

export default Main
