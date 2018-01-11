import { combineReducers } from 'redux'
import authReducer from './authReducer'
import tickets from './tickets'
import allUsers from './allUsers'

export default combineReducers({
  auth: authReducer,
  user_tickets: tickets,
  users: allUsers
})
