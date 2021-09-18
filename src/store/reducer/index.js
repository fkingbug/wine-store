import { combineReducers } from "redux"

import wine from "./wine"
import filter from "./filter"
import cart from "./cart"
const rootRecuder = combineReducers({
  wine,
  filter,
  cart,
})

export default rootRecuder
