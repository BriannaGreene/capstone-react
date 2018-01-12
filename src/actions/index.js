import axios from 'axios'
import {
  FETCH_USER,
  ALL_USERS,
  GET_TICKETS,
  GET_WEATHER,
  GET_USER,
  GET_MESSAGES,
  COMPOSE_MESSAGE,
  NEW_STICKY,
  EDIT_STICKY,
  DELETE_STICKY
} from './types'

export const fetchUser = () => {
  return async dispatch => {
    // const res = await axios.get(`${process.env.REACT_APP_API}/api/current_user`)
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data[0] })
  }
}

export const getUser = id => {
  return async dispatch => {
    const res = await axios.get(`${process.env.REACT_APP_API}/user/${id}`)
    dispatch({ type: GET_USER, payload: res.data[0] })
  }
}

export const allUsers = () => {
  return async dispatch => {
    const res = await axios.get(`${process.env.REACT_APP_API}/users`)
    dispatch({ type: ALL_USERS, payload: res.data })
  }
}

export const getTickets = id => {
  // console.log('get tickets: ', id);
  console.log('id coming into get tickets: ', id)
  return async dispatch => {
    const res = await axios.get(
      `${process.env.REACT_APP_API}/tickets/user/${id}`
    )
    dispatch({ type: GET_TICKETS, payload: res.data })
  }
}

export const getWeather = () => {
  return async dispatch => {
    const res = await axios.get(`${process.env.REACT_APP_API}/weather`)
    console.log('darksky data: ', res)
    dispatch({ type: GET_WEATHER, payload: res.data })
  }
}

export const getMessages = () => {
  return async dispatch => {
    const res = await axios.get(`${process.env.REACT_APP_API}/messages`)
    dispatch({ type: GET_MESSAGES, payload: res.data })
  }
}

export const composeMessage = (message, state) => {
  return async dispatch => {
    const res = await axios.post(`${process.env.REACT_APP_API}/messages`, {
      userId: message.userId,
      message: message.message
    })
    dispatch({ type: COMPOSE_MESSAGE, payload: res.data })
  }
}

export const newSticky = () => {
  console.log('post a new sticky with empty string');
}

export const editSticky = (note) => {
  console.log('patch sticky... how do you patch with no id.. maybe need new table of stickys');
}

export const deleteSticky = (note) => {
  console.log('get note, find matching note, delete, or new table with ids');
}
