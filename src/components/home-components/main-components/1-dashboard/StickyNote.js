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

  const updateSticky = (e) => {
    e.preventDefault()
    let update = e.target.value
    console.log(e.target.value);
    state.editSticky(id, update)
  }

  return (
    <div className="sticky">
      <div className="sticky-header">
        <button className="sticky-button" onClick={createSticky}><i class="fa fa-plus-circle fa-2x" aria-hidden="true"></i></button>
        <button className="sticky-button" onClick={deleteNote}><i className="fa fa-minus-circle fa-2x" aria-hidden="true"></i></button>
      </div>
      <div>
        {/* <ul>
          <li>{note}</li>
        </ul> */}
        {/* <input className="input-note" type="text" wrap="soft" id="uname" name="name" placeholder={note}></input> */}
        <textarea className="input-note" name="text" rows="14" cols="1" wrap="soft" onChange={updateSticky}>{note}</textarea>
      </div>
    </div>
  )
}


function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, actions)(StickyNote)
// export default StickyNote
