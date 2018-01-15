import { GET_STICKIES, DELETE_STICKY, NEW_STICKY } from '../actions/types'

export default function(state = [], action) {
  switch (action.type) {
    case GET_STICKIES:
      return action.payload || false
    case DELETE_STICKY:
    console.log('payload from stickies: ', action.payload);
      // return action.payload || false
    case NEW_STICKY:
    console.log('payload from new sticky:s', action.payload);
      // return action.payload || false
    default:
      return state
  }
}
