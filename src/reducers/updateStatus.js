import { UPDATE_STATUS } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
    case UPDATE_STATUS:
      // return action.payload || false
    default:
      return state
  }
}
