import { combineReducers } from 'redux'
import currentUser from './currentUser'
import users from './users'
import login from './login'
import signup from './signup'
import events from './events'

export default combineReducers({
  events,
  currentUser,
  users,
  login,
  signup
})