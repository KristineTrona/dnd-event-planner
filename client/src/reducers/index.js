import { combineReducers } from 'redux'
import currentUser from './currentUser'
import users from './users'
import login from './login'
import signup from './signup'



export default combineReducers({
  currentUser,
  users,
  login,
  signup
})