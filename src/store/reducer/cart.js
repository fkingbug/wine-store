const initialState = {
  items: {},
  totalPrice: 0,
}

// const getTotalPrice = (arr) => {
//   Object.keys(arr).reduce(
//     (sum, obj) => sum + arr[obj].reduce((sumObj, objItem) => sumObj + objItem.price, 0),
//     0
//   )
// }

const getTotalPrice = (arr) => {
  return Object.keys(arr).reduce((sum, obj) => {
    return (
      sum +
      arr[obj].reduce((sumObj, objItem) => {
        return sumObj + objItem.price
      }, 0)
    )
  }, 0)
}

const ADD_WINE = "ADD_WINE"
const CLEAR_CART = "CLEAR_CART"
const PLUS_CART_ITEM = "PLUS_CART_ITEM"
const MINUS_CART_ITEM = "MINUS_CART_ITEM"

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
    case CLEAR_CART: {
      return {
        ...state,
        items: {},
        totalPrice: 0,
      }
    }
    case PLUS_CART_ITEM: {
      const currentPlusitem = [...state.items[action.payload], state.items[action.payload][0]]
      console.log(currentPlusitem)
      const newWineItem = {
        ...state.items,
        [action.payload]: currentPlusitem,
      }
      return {
        ...state,
        items: newWineItem,
        totalPrice: getTotalPrice(newWineItem),
      }
    }
    case MINUS_CART_ITEM: {
      const oldItems = state.items[action.payload]
      let newItems
      if (oldItems.length > 1) {
        newItems = {
          ...state.items,
          [action.payload]: state.items[action.payload].slice(1),
        }
      } else {
        delete state.items[action.payload]
        newItems = { ...state.items }
      }
      return {
        ...state,
        items: newItems,
        totalPrice: getTotalPrice(newItems),
      }
    }
    default:
      return state
  }
}
export default wines
