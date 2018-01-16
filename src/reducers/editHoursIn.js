import { EDIT_HOURS_IN } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
    case EDIT_HOURS_IN:
      break
    default:
      return state || null
  }
}
