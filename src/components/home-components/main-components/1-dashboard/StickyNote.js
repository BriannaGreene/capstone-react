import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../../actions'

const StickyNote = ({id, note, user_id, state, createSticky, color}) => {
  let colorClass = color()

  const deleteNote = (e) => {
    e.preventDefault()
    state.deleteSticky(id)
    window.location.href = '/'
  }

  const updateSticky = (e) => {
    e.preventDefault()
    let update = e.target.value
    state.editSticky(id, update)
  }

  return (
    <div id="sticky" className={colorClass}>
      <div className="sticky-header">
        <button className="sticky-button" onClick={createSticky}><i className="fa fa-plus-circle fa-2x" aria-hidden="true"></i></button>
        <button className="sticky-button" onClick={deleteNote}><i className="fa fa-minus-circle fa-2x" aria-hidden="true"></i></button>
      </div>
      <div>
        <textarea className="input-note" name="text" rows="14" cols="1" wrap="soft" onChange={updateSticky} defaultValue={note}></textarea>
      </div>
    </div>
  )
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, actions)(StickyNote)
