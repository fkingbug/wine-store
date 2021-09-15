import axios from 'axios'
// (search, category = 'all')
export const fetchWines =
  (category = 'All', searchWine = '') =>
  dispatch => {
    axios
      .get(
        `https://613e3b5094dbd600172abb2c.mockapi.io/wines${
          category !== 'All' ? `?search=${category}` : ''
        }`,
      )
      .then(({ data }) => {
        if (searchWine !== '') {
          data = data.filter(e => e.name.toLowerCase().includes(searchWine.toLowerCase()))
        }
        dispatch(setWine(data))
      })
  }

export const setWine = items => ({
  type: 'SET_WINE',
  payload: items,
})
