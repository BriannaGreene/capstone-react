import axios from 'axios'
import { FETCH_USER, GET_TICKETS } from './types'

export const fetchUser = () => {
  return async dispatch => {
    // const res = await axios.get(`${process.env.REACT_APP_API}/api/current_user`)
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data[0] })
    getTickets(res.data[0].id)
  }
}

export const getTickets = ( id ) => {
  return async dispatch => {
    const res = await axios.get(`${process.env.REACT_APP_API}/tickets/user/${id}`)
    dispatch({ type: GET_TICKETS, payload: res.data })
  }
}
