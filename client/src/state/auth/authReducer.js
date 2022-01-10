import {
  ERROR,
  LOADING,
  READ_PROFILE,
  READ_LOGO,
  SIGN_IN,
  CLEAR_MESSAGE,
  SIGN_OUT,
} from './authTypes'

import { v4 as uuidv4 } from 'uuid'

const initialState = {
  loading: true,
  message: null,
  isAuthenticated: false,
  user: null,
  userLogo: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true }

    case SIGN_IN:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      }

    case READ_PROFILE:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
      }

    case READ_LOGO:
      return { ...state, userLogo: action.payload }

    case CLEAR_MESSAGE:
      return { ...state, message: null }

    case ERROR:
      return {
        ...state,
        loading: false,
        message: { id: uuidv4(), message: action.payload, severity: 'error' },
        isAuthenticated: false,
      }

    case SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false,
        user: undefined,
        userLogo: undefined,
        loading: false,
      }

    default:
      return state
  }
}

export default authReducer
