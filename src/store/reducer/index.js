import { combineReducers } from 'redux'

import wine from './wine'
import filter from './filter'
const rootRecuder = combineReducers({
  wine,
  filter,
})

export default rootRecuder
