export const addWineCart = (payload) => ({ type: "ADD_WINE", payload })
export const clearWineCart = () => ({ type: "CLEAR_CART" })
export const plusCartItem = (cod) => ({ type: "PLUS_CART_ITEM", payload: cod })
export const minusCartItem = (cod) => ({ type: "MINUS_CART_ITEM", payload: cod })
