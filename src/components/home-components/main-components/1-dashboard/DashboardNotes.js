import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../../actions'
import StickyNote from './StickyNote'

const DashboardNotes = ( state ) => {
  let id = state.auth.id
  // CHANGE ID TO EQUAL ID INSTEAD OF 1
  let notes = state.users.filter(item => item.id === 1).map(user => user.sticky.notes)
  let key = 0

  // const postMessage = (e) => {
  //   e.preventDefault()
  //   state.composeMessage({
  //     userId: user,
  //     message: e.target.message.value,
  //     state: messages
  //   })
  //   var frm = document.getElementsByName('message-form')[0]
  //   frm.reset()
  //   return false
  // }

  const eachSticky = notes.map(note => note.map(note => {
    console.log('each note coming in: ', note);
    key += 1
    return(
      <StickyNote
        key={key} 
        note={note}
      />
    )
  }))

  return (
    <div>
      <div>
        {eachSticky}
      </div>

    </div>
  )
}

function mapStateToProps({ users, auth }) {
  return { users, auth }
}

export default connect(mapStateToProps, actions)(DashboardNotes)
