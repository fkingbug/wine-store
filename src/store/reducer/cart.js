const initialState = {
  items: {},
  totalPrice: 0,
}

const getTotalPrice = (arr) => {
  return Object.keys(arr).reduce(
    (sum, obj) => sum + arr[obj].reduce((sumObj, objItem) => sumObj + objItem.price, 0),
    0
  )
}

// const getTotalPrice = (arr) => {
//     return Object.keys(arr).reduce((sum, obj) => {
//       return (
//         sum +
//         arr[obj].reduce((sumObj, objItem) => {
//           return sumObj + objItem.price
//         }, 0)
//       )
//     }, 0)
//   }

const ADD_WINE = "ADD_WINE"

const wines = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WINE: {
      const currentWineItem = !state.items[action.payload.cod]
        ? [action.payload]
        : [...state.items[action.payload.cod], action.payload]

      const newWineItem = {
        ...state.items,
        [action.payload.cod]: currentWineItem,
      }
      return {
        ...state,
        items: newWineItem,
        totalPrice: getTotalPrice(newWineItem),
      }
    }

    default:
      return state
  }
}
export default wines
