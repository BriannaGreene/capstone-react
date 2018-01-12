import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../../actions'

const StickyNote = ({id, note, user_id, state}) => {
  console.log('STATE FROM STICKIES: ', state);

  // on click, send id to deleteMessage function
  const deleteNote = (e) => {
    e.preventDefault()
    console.log('event', e);
    console.log('note', note);
    state.deleteSticky(id)
  }

  const createSticky = (e) => {
    e.preventDefault()
    state.newSticky(user_id)
  }

  return (
    <div className="sticky">
      <div className="sticky-header">
        <button className="" onClick={createSticky}><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
        <button className="" onClick={deleteNote}><i className="fa fa-minus-circle" aria-hidden="true"></i></button>


      </div>
      <div>
        {note}
      </div>
    </div>
  )
}


function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, actions)(StickyNote)
// export default StickyNote
