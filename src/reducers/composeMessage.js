import { COMPOSE_MESSAGE } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
    case COMPOSE_MESSAGE:
      console.log('payload from compose: ', action.payload);
      console.log('state from compose: ', state);
      // return
      // ...action.payload,
      // action.payload || false
    default:
      return state || null
  }
}
