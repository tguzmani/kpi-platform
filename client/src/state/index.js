import { combineReducers } from 'redux'

import authReducer from './auth/authReducer'
import usersReducer from './users/usersReducer'
import reportsReducer from './reports/reportsReducer'
import adminsReducer from './admins/adminsReducer'

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  reports: reportsReducer,
  admins: adminsReducer,
})
