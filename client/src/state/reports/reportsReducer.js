import {
  ERROR,
  LOADING,
  CLEAR_MESSAGE,
  CREATE_REPORTS_GROUP,
  READ_REPORT_GROUPS_HEADERS_BY_ADMIN,
  READ_REPORTS_BY_ADMIN,
  READ_ACCOUNT_REPORTS_BY_ADMIN,
  READ_USERS_REPORTS_BY_ADMIN,
  UPDATE_REPORT_ACTIVE_STATE_BY_ADMIN,
  UPDATE_REPORTS_GROUP,
} from './reportsTypes'

const initialState = {
  loading: false,
  message: null,
  reports: [],
  reportsGroups: [],
  accountReports: [],
  usersReports: [],
}

const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_REPORT_GROUPS_HEADERS_BY_ADMIN:
      return { ...state, loading: false, reportsGroups: action.payload }

    case READ_REPORTS_BY_ADMIN:
      return { ...state, loading: false, reports: action.payload }

    case READ_ACCOUNT_REPORTS_BY_ADMIN:
      return { ...state, loading: false, accountReports: action.payload }

    case READ_USERS_REPORTS_BY_ADMIN:
      return { ...state, loading: false, usersReports: action.payload }

    case UPDATE_REPORT_ACTIVE_STATE_BY_ADMIN:
      return { ...state, loading: false, accountReports: action.payload }

    case CREATE_REPORTS_GROUP:
      return { ...state, loading: false }

    case UPDATE_REPORTS_GROUP:
      return {
        ...state,
        loading: false,
        reportsGroups: state.reportsGroups.map(reportGroup =>
          reportGroup.id === action.payload.id ? action.payload : reportGroup
        ),
      }

    case CLEAR_MESSAGE:
      return { ...state, message: null }

    case LOADING:
      return { ...state, loading: true }

    case ERROR:
      return { ...state, loading: false, message: action.payload }

    default:
      return state
  }
}

export default reportReducer
