import { combineReducers } from 'redux'
import authReducer from './authReducer'
import tickets from './tickets'
import allUsers from './allUsers'
import getUser from './getUser'

export default combineReducers({
  auth: authReducer,
  user_tickets: tickets,
  users: allUsers,
  user: getUser
})
