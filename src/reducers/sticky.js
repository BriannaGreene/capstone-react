import { NEW_STICKY, EDIT_STICKY, DELETE_STICKY } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
    case NEW_STICKY:
      return action.payload || false
    default:
      return state
  }
}
