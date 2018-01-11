import axios from 'axios'
import { FETCH_USER, ALL_USERS, GET_TICKETS } from './types'

export const fetchUser = () => {
  return async dispatch => {
    // const res = await axios.get(`${process.env.REACT_APP_API}/api/current_user`)
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data[0] })

    if (res.data[0].id) getTickets(res.data[0].id)
  }
}

export const allUsers = () => {
  return async dispatch => {
    const res = await axios.get(`${process.env.REACT_APP_API}/users`)
    console.log(res.data);
    dispatch({ type: ALL_USERS, payload: res.data})
  }
}

export const getTickets = (id) => {
  // console.log('get tickets: ', id);

  console.log('id coming into get tickets: ', id);
  return async dispatch => {
    const res = await axios.get(`${process.env.REACT_APP_API}/tickets/user/${id}`)
    dispatch({ type: GET_TICKETS, payload: res.data })
  }
}
