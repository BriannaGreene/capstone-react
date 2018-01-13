import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../../actions'
import StickyNote from './StickyNote'

const DashboardNotes = ( state ) => {
  // let id = state.auth.id
  let notes = state.stickies
  let key = 0
  let eachSticky = null
  // state.getStickies(id)
  console.log('notes from dashboardnotes: ', state)
  // CHANGE ID TO EQUAL ID INSTEAD OF 1
  // let notes = state.users.filter(item => item.id === 1).map(user => user.sticky.notes)



  if (notes !== null) {
    console.log('NOTES')
    console.log(notes);
    eachSticky = notes.map(note => {
      console.log('each note coming in: ', note)
      key += 1
      return(
        <StickyNote
          key={note.id}
          id={note.id}
          note={note.note}
          user_id={note.user_id}
          state={state}
        />
      )
    })
  }


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



  return (
    <div>
      <div className="sticky-container">
        {eachSticky}
      </div>
    </div>
  )
}

function mapStateToProps({ users, auth, stickies }) {
  return { users, auth, stickies }
}

export default connect(mapStateToProps, actions)(DashboardNotes)
