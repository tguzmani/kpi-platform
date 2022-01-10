import {
  ERROR,
  LOADING,
  CLEAR_MESSAGE,
  READ_REPORT_GROUPS_HEADERS_BY_ADMIN,
  READ_REPORTS_BY_ADMIN,
  READ_ACCOUNT_REPORTS_BY_ADMIN,
  READ_USERS_REPORTS_BY_ADMIN,
  UPDATE_REPORT_ACTIVE_STATE_BY_ADMIN,
} from './reportsTypes'

import axios from 'axios'

import { config } from '../../util/state'

export const handleError = (dispatch, error) => {
  dispatch({ type: ERROR, payload: error.response.data })
  setTimeout(() => {
    dispatch({
      type: CLEAR_MESSAGE,
      payload: error.response.data.message,
    })
  }, 3000)
}

export const setLoading = () => dispatch => {
  return dispatch({ type: LOADING })
}

export const readReportGroupsHeadersByAdmin = () => async dispatch => {
  setLoading()(dispatch)
  try {
    const res = await axios.get('/api/reports/headers')
    dispatch({
      type: READ_REPORT_GROUPS_HEADERS_BY_ADMIN,
      payload: res.data,
    })
  } catch (error) {
    handleError(dispatch, error)
  }
}

export const readReportsByAdmin = () => async dispatch => {
  setLoading()(dispatch)
  try {
    const res = await axios.get('/api/reports')
    dispatch({
      type: READ_REPORTS_BY_ADMIN,
      payload: res.data,
    })
  } catch (error) {
    handleError(dispatch, error)
  }
}

export const readAccountReportsByAdmin = () => async dispatch => {
  setLoading()(dispatch)
  try {
    const res = await axios.get('/api/reports/account')
    dispatch({
      type: READ_ACCOUNT_REPORTS_BY_ADMIN,
      payload: res.data,
    })
  } catch (error) {
    handleError(dispatch, error)
  }
}

export const readUsersReportsByAdmin = () => async dispatch => {
  setLoading()(dispatch)
  try {
    const res = await axios.get('/api/reports/users')
    dispatch({
      type: READ_USERS_REPORTS_BY_ADMIN,
      payload: res.data,
    })
  } catch (error) {
    handleError(dispatch, error)
  }
}

export const updateReportActiveStateByAdmin =
  (active, reportId) => async dispatch => {
    setLoading()(dispatch)

    try {
      const res = await axios.put(
        `/api/reports/toggleActive/${reportId}`,
        { active },
        config
      )
      dispatch({ type: UPDATE_REPORT_ACTIVE_STATE_BY_ADMIN, payload: res.data })
    } catch (error) {
      dispatch({ type: ERROR, payload: error.response.data.message })
    }
  }
