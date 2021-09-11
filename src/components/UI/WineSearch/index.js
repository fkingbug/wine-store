import React from 'react'
import SearchIcon from '@material-ui/icons/Search'

import cl from './WineSearch.module.scss'
const WineSearch = ({ search, setInput }) => {
  return (
    <div className={cl.search}>
      <SearchIcon />
      <input
        className={cl.wineSearch}
        value={search}
        onChange={e => setInput(e)}
        type="text"
        placeholder="Find procduct by name or code"
      />
    </div>
  )
}

export default WineSearch
