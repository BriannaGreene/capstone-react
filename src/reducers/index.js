import { combineReducers } from 'redux'
import authReducer from './authReducer'
import tickets from './tickets'

export default combineReducers({
  auth: authReducer,
  user_tickets: tickets
})
