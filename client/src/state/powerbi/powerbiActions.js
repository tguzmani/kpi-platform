import {
  ERROR,
  LOADING,
  CLEAR_MESSAGE,
  GET_ACCESS_TOKEN,
  GET_REPORT_DATA,
} from './powerbiTypes'

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

export const getAccessToken = () => async dispatch => {
  setLoading()(dispatch)
  try {
    const res = await axios.get('/powerbi/token')
    dispatch({ type: GET_ACCESS_TOKEN, payload: res.data })
  } catch (error) {
    handleError(dispatch, error)
  }
}

export const getReportData = (groupId, reportId) => async dispatch => {
  setLoading()(dispatch)
  try {
    const res = await axios.post('/powerbi/reportData', { groupId, reportId })
    dispatch({ type: GET_REPORT_DATA, payload: res.data })
  } catch (error) {
    handleError(dispatch, error)
  }
}
