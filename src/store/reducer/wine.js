const initialState = {
  items: [],
}

const SET_WINE = 'SET_WINE'

const wines = (state = initialState, action) => {
  switch (action.type) {
    case SET_WINE:
      return { ...state, items: [...action.payload] }
    default:
      return state
  }
}
export default wines
