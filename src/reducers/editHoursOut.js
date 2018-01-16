import { EDIT_HOURS_OUT } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
    case EDIT_HOURS_OUT:
      console.log('payload from compose: ', action.payload);
      console.log('state from compose: ', state);
      // return
      // ...action.payload,
      // action.payload || false
    default:
      return state || null
  }
}
