const initialState = {
  category: "All",
  searchWine: "",
}

const SET_CATEGORY = "SET_CATEGORY"
const SET_SEARCH = "SET_SEARCH"

const filters = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      }
    case SET_SEARCH:
      return { ...state, searchWine: action.payload }
    default:
      return state
  }
}
export default filters
