import { combineReducers } from 'redux'
import currentUser from './currentUser'
import users from './users'
import login from './login'
import signup from './signup'
import events from './events'
import selectedEvent from './selectedEvent'

export default combineReducers({
  events,
  selectedEvent,
  currentUser,
  users,
  login,
  signup
})