import {
  ERROR,
  LOADING,
  CLEAR_MESSAGE,
  READ_LOGO,
  UPDATE_LOGO,
  READ_LOGO_BY_SUBDOMAIN,
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
      return { ...state, userLogo: action.payload }

    case READ_LOGO_BY_SUBDOMAIN:
      return { ...state, appBarLogo: action.payload }

    case UPDATE_LOGO:
      return { ...state, userLogo: action.payload, appBarLogo: action.payload }

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

export default adminReducer
