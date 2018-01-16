import { EDIT_HOURS_OUT } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
    case EDIT_HOURS_OUT:
      break
    default:
      return state || null
  }
}
