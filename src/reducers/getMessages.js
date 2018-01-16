import { GET_MESSAGES } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
    case GET_MESSAGES:
      return action.payload || false
    default:
      return state
  }
}
