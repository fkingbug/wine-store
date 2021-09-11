import React, { useState } from 'react'
import TabsWine from '../TabsWine'
import WineSearch from '../UI/WineSearch'

const categoryWine = ['All', 'Red', 'White', 'Rose', 'Sparking', 'Dessert']

const FindWine = () => {
  const [search, setSearch] = useState('')
  const [tabsActive, setTabsActive] = useState(0)

  const getActiveTabs = React.useCallback(index => {
    setTabsActive(index)
  }, [])

  return (
    <div>
      <WineSearch search={search} setInput={e => setSearch(e.target.value)} />
      <TabsWine items={categoryWine} tabsActive={tabsActive} getActiveTabs={getActiveTabs} />
    </div>
  )
}

export default FindWine
