export const addWineCart = (wine) => (dispatch) => {
  dispatch({ type: "ADD_WINE", payload: wine })
}
