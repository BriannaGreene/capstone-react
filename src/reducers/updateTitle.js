import { UPDATE_TITLE } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
    case UPDATE_TITLE:
      // return action.payload || false
    default:
      return state
  }
}
