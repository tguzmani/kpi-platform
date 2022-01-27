import {
  ERROR,
  LOADING,
  CLEAR_MESSAGE,
  READ_CONTRACT_BY_ADMIN,
} from './contractsTypes'

import axios from 'axios'

export const handleError = (dispatch, error) => {
  dispatch({ type: ERROR, payload: error.response.data })
  setTimeout(() => {
    dispatch({ type: CLEAR_MESSAGE, payload: error.response.data.message })
  }, 3000)
}

export const setLoading = () => dispatch => {
  return dispatch({ type: LOADING })
}

export const readContractByAdmin = () => async dispatch => {
  setLoading()(dispatch)

  try {
    const res = await axios.get(`/contracts/`)
    dispatch({ type: READ_CONTRACT_BY_ADMIN, payload: res.data })
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data.message })
  }
}
