import {
  ERROR,
  LOADING,
  CLEAR_MESSAGE,
  READ_COUNTRIES,
  READ_REGIONS,
  READ_ZONES,
} from './locationsTypes'

const initialState = {
  loading: false,
  message: null,
  countries: [],
  regions: [],
  zones: [],
}

const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_COUNTRIES:
      return { ...state, countries: action.payload }

    case READ_REGIONS:
      return { ...state, regions: action.payload }

    case READ_ZONES:
      return { ...state, zones: action.payload }

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

export default locationsReducer
