import { COMPOSE_MESSAGE } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
    case COMPOSE_MESSAGE:
      break
    default:
      return state || null
  }
}
