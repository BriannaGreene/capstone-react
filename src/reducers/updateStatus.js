import { UPDATE_STATUS } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
    case UPDATE_STATUS:
      break
    default:
      return state
  }
}
