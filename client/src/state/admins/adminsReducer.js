import {
  ERROR,
  LOADING,
  CLEAR_MESSAGE,
  READ_LOGO,
  UPDATE_LOGO,
  READ_LOGO_BY_SUBDOMAIN,
  ACCEPT_TERMS_AND_CONDITIONS,
  CHANGE_USER_PASSWORD,
} from './adminsTypes'

const initialState = {
  loading: false,
  message: null,
  userLogo: undefined,
  appBarLogo: undefined,
}

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_LOGO:
      return { ...state, userLogo: action.payload, loading: false }

    case READ_LOGO_BY_SUBDOMAIN:
      return { ...state, appBarLogo: action.payload, loading: false }

    case ACCEPT_TERMS_AND_CONDITIONS:
      return { ...state, loading: false }

    case UPDATE_LOGO:
      return {
        ...state,
        userLogo: action.payload,
        appBarLogo: action.payload,
        loading: false,
      }

    case CLEAR_MESSAGE:
      return { ...state, message: null }

    case LOADING:
      return { ...state, loading: true }

    case ERROR:
      return { ...state, loading: false, message: action.payload }

    case CHANGE_USER_PASSWORD:
    default:
      return state
  }
}

export default adminReducer
