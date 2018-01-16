import { NEW_TASK } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
    case NEW_TASK:
      break
    default:
      return state
  }
}
