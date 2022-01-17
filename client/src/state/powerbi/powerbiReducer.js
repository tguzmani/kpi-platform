import {
  ERROR,
  LOADING,
  CLEAR_MESSAGE,
  GET_ACCESS_TOKEN,
  GET_REPORT_DATA,
} from './powerbiTypes'

const initialState = {
  loading: false,
  message: null,
  accessToken: undefined,
  embedUrl: undefined,
}

const powerbiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCESS_TOKEN:
      return {
        ...state,
        loading: false,
        accessToken: action.payload.token,
      }

    case GET_REPORT_DATA:
      return {
        ...state,
        loading: false,
        embedUrl: action.payload.embedUrl,
        accessToken: action.payload.accessToken,
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

export default powerbiReducer
