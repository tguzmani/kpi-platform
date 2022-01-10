import {
  ERROR,
  LOADING,
  CLEAR_MESSAGE,
  CREATE,
  READ,
  READ_ALL,
  UPDATE,
  DELETE,
} from './usersTypes'

import axios from 'axios'

import { config } from '../../util/state'

export const handleError = (dispatch, error) => {
  dispatch({ type: ERROR, payload: error.response.data })
  setTimeout(() => {
    dispatch({ type: CLEAR_MESSAGE, payload: error.response.data.message })
  }, 3000)
}

export const setLoading = () => dispatch => {
  return dispatch({ type: LOADING })
}

export const createUser = user => async dispatch => {
  setLoading()(dispatch)
  try {
    const res = await axios.post(`/api/users`, user, config)
    dispatch({ type: CREATE, payload: res.data })
  } catch (error) {
    handleError(dispatch, error)
  }
}

export const readUsers = () => async dispatch => {
  setLoading()(dispatch)
  try {
    const res = await axios.get('/api/users')
    dispatch({ type: READ_ALL, payload: res.data })
  } catch (error) {
    handleError(dispatch, error)
  }
}

export const updateUser = user => async dispatch => {
  setLoading()(dispatch)
  try {
    const res = await axios.put(`/api/users/${user.id}`, user, config)
    dispatch({ type: UPDATE, payload: res.data })
  } catch (error) {
    handleError(dispatch, error)
  }
}

// export const deleteUser = user => async dispatch => {
//   setLoading()(dispatch)
//   try {
//     const res = await axios.delete(`/api/users/${user._id}`)
//     dispatch({ type: DELETE, payload: res.data })
//   } catch (error) {
//     handleError(dispatch, error)
//   }
// }
