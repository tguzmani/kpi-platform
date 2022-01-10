import {
  ERROR,
  LOADING,
  READ_PROFILE,
  READ_LOGO,
  SIGN_IN,
  CLEAR_MESSAGE,
  SIGN_OUT,
} from './authTypes'
import axios from 'axios'

import { config } from '../../util/state'

export const handleError = (dispatch, error) => {
  dispatch({ type: ERROR, payload: error.response.data.message })
  setTimeout(() => {
    dispatch({ type: CLEAR_MESSAGE, payload: error.response.data.message })
  }, 3000)
}

export const setLoading = () => dispatch => {
  return dispatch({ type: LOADING })
}

export const signIn = credentials => async dispatch => {
  setLoading()(dispatch)

  try {
    const res = await axios.post('/api/auth/signIn', credentials, config)
    dispatch({ type: SIGN_IN, payload: res.data })
  } catch (error) {
    console.log(error.response.data.message)
    dispatch({ type: ERROR, payload: error.response.data.message })
  }
}

export const readProfile = () => async dispatch => {
  setLoading()(dispatch)

  try {
    const res = await axios.get(`/api/admins/profile`)
    dispatch({ type: READ_PROFILE, payload: res.data })
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data.message })
  }
}

export const readLogo = () => async dispatch => {
  setLoading()(dispatch)

  try {
    const res = await axios.get(`/api/admins/logo`)
    dispatch({ type: READ_LOGO, payload: res.data })
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data.message })
  }
}

export const signOut = () => async dispatch => {
  setLoading()(dispatch)

  try {
    await axios.post(`/api/auth/signOut`)
    dispatch({ type: SIGN_OUT })
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data.message })
  }
}
