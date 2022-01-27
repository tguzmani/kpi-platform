import {
  ERROR,
  LOADING,
  CLEAR_MESSAGE,
  READ_CONTRACT_BY_ADMIN,
} from './contractsTypes'

const initialState = {
  loading: false,
  message: null,
  contract: undefined,
}

const contractsReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_CONTRACT_BY_ADMIN:
      return { ...state, contract: action.payload }

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

export default contractsReducer
