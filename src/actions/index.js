import axios from 'axios'
import {
  FETCH_USER,
  ALL_USERS,
  GET_TICKETS,
  GET_WEATHER,
  GET_USER,
  GET_MESSAGES,
  COMPOSE_MESSAGE,
  GET_STICKIES,
  NEW_STICKY,
  EDIT_STICKY,
  DELETE_STICKY,
  EDIT_HOURS_IN,
  EDIT_HOURS_OUT,
  NEW_TASK,
  UPDATE_TITLE,
  UPDATE_STATUS
} from './types'

export const fetchUser = () => {
  return async dispatch => {
    // console.log('ROUTE ON FET USER: ', `${process.env.REACT_APP_API}/api/current_user`);
    const res = await axios.get(`${process.env.REACT_APP_API}/api/current_user`)
    // console.log('RESPONSE ON FETUSER: ', res.data);
    // const res = await axios.get('/api/current_user')
    // const res = await axios.get('http://localhost:5000/api/current_user')
    console.log('RES FROM FETCH: ', res);
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

export const getTickets = () => {
  return async dispatch => {
    const response = await axios.get(`${process.env.REACT_APP_API}/api/current_user`)
    // const response = await axios.get('/api/current_user')
    if (response.data[0] !== undefined) {
      let id = response.data[0].id
      const res = await axios.get(
        `${process.env.REACT_APP_API}/tickets/user/${id}`
      )
      dispatch({ type: GET_TICKETS, payload: res.data })
    }
  }
}

export const getWeather = () => {
  return async dispatch => {
    const res = await axios.get(`${process.env.REACT_APP_API}/weather`)
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

    const response = await axios.get(`${process.env.REACT_APP_API}/messages`)
    console.log('RESPONSE OF ALL MESSAGES: ', response.data);
    let newMessages = [...response.data, res.data]
    console.log('NEW MESSAGES ARRAY VARIABLE: ', newMessages);
    getMessages()
    dispatch({ type: COMPOSE_MESSAGE, payload: newMessages })
  }
}

export const getStickies = () => {
  return async dispatch => {
    const response = await axios.get(`${process.env.REACT_APP_API}/api/current_user`)
    // const response = await axios.get('/api/current_user')
    if (response.data[0] !== undefined) {
      let id = response.data[0].id
      const res = await axios.get(`${process.env.REACT_APP_API}/notes/${id}`)
      dispatch({ type: GET_STICKIES, payload: res.data})
    }

  }
}

export const newSticky = (id) => {
  console.log('post a new sticky with empty string');
  console.log('send user id along:', id);
  return async dispatch => {
    const res = await axios.post(`${process.env.REACT_APP_API}/notes`, {
      note: "",
      userId: id
    })
    console.log('response from new sticky: ', res.data);
    dispatch({ type: NEW_STICKY, payload: res.data })
  }
}

export const editSticky = (id, message) => {
  console.log('patch sticky... how do you patch with no id.. maybe need new table of stickys', id, message);
  return async dispatch => {
    const res = await axios.patch(`${process.env.REACT_APP_API}/notes/${id}`, {
      id: id,
      note: message
    })
    console.log('response from new sticky: ', res.data);
    // dispatch({ type: NEW_STICKY, payload: res.data })
  }
}

export const deleteSticky = (id) => {
  return async dispatch => {
    const res = await axios.delete(`${process.env.REACT_APP_API}/notes/${id}`, {id: id})
    dispatch({ type: DELETE_STICKY, payload: res.data })
  }
}

export const editHoursIn = (id, number) => {
  return async dispatch => {
    const res = await axios.patch(`${process.env.REACT_APP_API}/tickets/${id}`, {
      id: id,
      hoursComplete: number,
    })
    console.log('response from edit hours in: ', res.data);
    dispatch({ type: EDIT_HOURS_IN, payload: res.data })
  }
}

export const editHoursOut = (id, number) => {
  return async dispatch => {
    const res = await axios.patch(`${process.env.REACT_APP_API}/tickets/${id}`, {
      id: id,
      hoursToComplete: number,
    })
    console.log('response from edit hours in: ', res.data);
    // dispatch({ type: EDIT_HOURS_IN, payload: res.data })
  }
}

export const newTask = (team, title, assignees) => {
  console.log('team in new task: ', team);
  return async dispatch => {
    const res = await axios.post(`${process.env.REACT_APP_API}/tickets`, {
      team: team,
      title: title,
      assignees: assignees,
      // prioity: 1
    })
    console.log('res from new task: ', res);
  }
}

export const updateTitle = (id, title) => {
  return async dispatch => {
    const res = await axios.patch(`${process.env.REACT_APP_API}/tickets/${id}`, {
      id: id,
      title: title,
    })
    console.log('response from edit hours in: ', res.data);
    // dispatch({ type: NEW_STICKY, payload: res.data })
  }
}

export const updateStatus = (id, newStatus) => {
  return async dispatch => {
    const res = await axios.patch(`${process.env.REACT_APP_API}/tickets/${id}`, {
      id: id,
      status: newStatus,
    })
    console.log('response from edit hours in: ', res.data);
    // dispatch({ type: NEW_STICKY, payload: res.data })
  }
}
