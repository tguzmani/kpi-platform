import {
  ERROR,
  LOADING,
  CLEAR_MESSAGE,
  CREATE,
  READ_SECTIONS_BY_ADMIN,
  UPDATE,
  DELETE,
} from './sectionsTypes'

const initialState = {
  loading: false,
  message: null,
  sections: [],
}

const sectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        loading: false,
        sections: [action.payload, ...state.sections],
      }

    case READ_SECTIONS_BY_ADMIN:
      return { ...state, loading: false, sections: action.payload }

    case UPDATE:
      return {
        ...state,
        loading: false,
        sections: state.sections.map(section =>
          section._id === action.payload._id ? action.payload : section
        ),
      }

    case DELETE:
      return {
        ...state,
        loading: false,
        sections: state.sections.filter(
          section => section._id !== action.payload._id
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

export default sectionReducer
