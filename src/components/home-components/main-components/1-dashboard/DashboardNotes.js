import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../../actions'
import StickyNote from './StickyNote'

const DashboardNotes = ( state ) => {
  console.log('state from dashboard notes: ', state);
  let id = state.auth.id
  // CHANGE ID TO EQUAL ID INSTEAD OF 1
  let notes = state.users.filter(item => item.id === 1).map(user => user.sticky.notes)

  console.log('notes from notes:' , notes);
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

  const eachSticky = notes.forEach(note => {
    console.log('each note from notes: ', note)
    console.log('each note from notes: ', note[0])

    // <StickyNote
    //   note={note}
    // />
  })

  return (
    <div>
      {eachSticky}
    </div>
  )
}

function mapStateToProps({ users, auth }) {
  return { users, auth }
}

export default connect(mapStateToProps, actions)(DashboardNotes)
