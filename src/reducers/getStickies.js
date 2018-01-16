import { GET_STICKIES, DELETE_STICKY, NEW_STICKY } from '../actions/types'

export default function(state = [], action) {
  switch (action.type) {
    case GET_STICKIES:
      return action.payload || false
    default:
      return state
  }
}
