export const setWineCategory = category => dispatch => {
  dispatch({ type: 'SET_CATEGORY', payload: category })
}
export const setSearch = search => dispatch => {
  dispatch({ type: 'SET_SEARCH', payload: search })
}
