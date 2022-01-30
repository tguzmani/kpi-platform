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

export const setLoading =
  (loading = true) =>
  dispatch => {
    return dispatch({ type: LOADING, payload: loading })
  }

export const signIn = (userType, credentials) => async dispatch => {
  setLoading()(dispatch)

  try {
    const res = await axios.post(`/${userType}/signIn`, credentials, {
      ...config,
      withCredentials: true,
    })
    dispatch({ type: SIGN_IN, payload: res.data })
  } catch (error) {
    console.log(error.response.data.message)
    dispatch({ type: ERROR, payload: error.response.data.message })
  }
}

export const readProfile = userType => async dispatch => {
  setLoading()(dispatch)

  try {
    const res = await axios.get(`/${userType}/profile`)
    dispatch({ type: READ_PROFILE, payload: res.data })
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data.message })
  }
}

export const signOut = userType => async dispatch => {
  setLoading()(dispatch)

  try {
    await axios.post(`/${userType}/signOut`)
    dispatch({ type: SIGN_OUT })
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data.message })
  }
}
