import { combineReducers } from 'redux'
import authReducer from './authReducer'
import tickets from './tickets'
import allUsers from './allUsers'
import getUser from './getUser'
import getWeather from './getWeather'
import getMessages from './getMessages'
import composeMessage from './composeMessage'
import getStickies from './getStickies'
import editHours from './editHours'

export default combineReducers({
  auth: authReducer,
  user_tickets: tickets,
  users: allUsers,
  user: getUser,
  weather: getWeather,
  messages: getMessages,
  compose: composeMessage,
  stickies: getStickies,
  hours: editHours
})
