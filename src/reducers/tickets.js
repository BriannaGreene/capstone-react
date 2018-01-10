import { GET_TICKETS } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
    case GET_TICKETS:
      return action.payload || false
    default:
      return state
  }
}
