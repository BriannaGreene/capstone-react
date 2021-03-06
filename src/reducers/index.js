import { combineReducers } from 'redux'
import authReducer from './authReducer'
import tickets from './tickets'
import allUsers from './allUsers'
import getUser from './getUser'
import getWeather from './getWeather'
import getMessages from './getMessages'
import composeMessage from './composeMessage'
import getStickies from './getStickies'
import editHoursIn from './editHoursIn'
import editHoursOut from './editHoursOut'
import newTask from './newTask'
import updateTitle from './updateTitle'
import updateStatus from './updateStatus'

export default combineReducers({
  auth: authReducer,
  user_tickets: tickets,
  users: allUsers,
  user: getUser,
  weather: getWeather,
  messages: getMessages,
  compose: composeMessage,
  stickies: getStickies,
  editHoursIn: editHoursIn,
  editHoursOut: editHoursOut,
  newTask: newTask,
  updateTitle: updateTitle,
  updateStatus: updateStatus
})
