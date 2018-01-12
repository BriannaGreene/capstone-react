import axios from 'axios'
import {
  FETCH_USER,
  ALL_USERS,
  GET_TICKETS,
  GET_WEATHER,
  GET_USER,
  GET_MESSAGES,
  COMPOSE_MESSAGE,
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
  console.log('message coming to action: ', message);
  console.log('state coming to action: ', state);

  return async dispatch => {
    const res = await axios.post(`${process.env.REACT_APP_API}/messages`, {
      userId: message.userId,
      message: message.message
    })
    console.log('res from compose message', res.data);
    dispatch({ type: COMPOSE_MESSAGE, payload: res.data })
  }
}

// async composeMessage(message) {
//   const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
//     method: 'POST',
//     body: JSON.stringify(message),
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     }
//   })
//   const newMessage = await response.json()
//   const newMessageList = [...this.state.messages, newMessage]
//   this.setState({ messages: newMessageList, filtered: newMessageList, composing: false })
// }
