import { GET_MESSAGES } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
    case GET_MESSAGES:
    console.log('ACTION PAYLOAD FROM GET MESSAGES :', action.payload);
      return action.payload || false
    default:
      return state
  }
}
