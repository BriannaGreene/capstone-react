import { NEW_TASK } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
    case NEW_TASK:
      // return action.payload || false
    default:
      return state
  }
}
