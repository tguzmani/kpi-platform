import {
  ERROR,
  LOADING,
  CLEAR_MESSAGE,
  READ_LOGO,
  UPDATE_LOGO,
} from './adminsTypes'

const initialState = {
  loading: false,
  message: null,
  userLogo: undefined,
}

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_LOGO:
      return { ...state, userLogo: action.payload }

    case UPDATE_LOGO:
      return { ...state, userLogo: action.payload }

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
