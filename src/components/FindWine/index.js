import React from 'react'
import TabsWine from '../TabsWine'
import WineSearch from '../UI/WineSearch'

const FindWine = ({ searchWine, categoryWine, category, getSearchWine, getActiveTabs }) => {
  return (
    <div>
      <WineSearch search={searchWine} setInput={e => getSearchWine(e.target.value)} />
      <TabsWine items={categoryWine} tabsActive={category} getActiveTabs={getActiveTabs} />
    </div>
  )
}

export default FindWine
