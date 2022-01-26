import {
  ERROR,
  LOADING,
  CLEAR_MESSAGE,
  UPDATE_LOGO,
  READ_LOGO,
  READ_LOGO_BY_SUBDOMAIN,
} from './adminsTypes'

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

export const readLogo = () => async dispatch => {
  setLoading()(dispatch)

  try {
    const res = await axios.get(`/admins/logo`)
    dispatch({ type: READ_LOGO, payload: res.data })
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data.message })
  }
}

export const readLogoBySubdomain = subdomain => async dispatch => {
  setLoading()(dispatch)

  try {
    const res = await axios.get(
      `/admins/logoBySubdomain?subdomain=${subdomain}`
    )
    dispatch({ type: READ_LOGO_BY_SUBDOMAIN, payload: res.data })
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data.message })
  }
}

export const updateLogo = logoFile => async dispatch => {
  setLoading()(dispatch)

  let data = new FormData()
  data.append('image', logoFile)

  try {
    const res = await axios.put(`/admins/logo`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    dispatch({ type: UPDATE_LOGO, payload: res.data.logo })
  } catch (error) {
    handleError(dispatch, error)
  }
}
