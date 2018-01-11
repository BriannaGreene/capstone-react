import axios from 'axios'
import { GET_USER } from './getUser'

export const getUser = (id) => {
  return async dispatch => {
    const res = await axios.get(`${process.env.REACT_APP_API}/user/${id}`)
    console.log('user from get user: ', res.data);
    dispatch({ type: GET_USER, payload: res.data[0] })
  }
}
