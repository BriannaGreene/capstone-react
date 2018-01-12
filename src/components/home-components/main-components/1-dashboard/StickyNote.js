import React from 'react'


const StickyNote = ({note}) => {

  // on click, send id to deleteMessage function
  const deleteSticky = (e) => {
    e.preventDefault()
    console.log('event', e);
    console.log('note', note);
    // deleteNote(note)
  }

  return (
    <div className="sticky">
      <div className="sticky-header">
        {/* <button className="" onClick={createSticky}><i class="fa fa-plus-circle" aria-hidden="true"></i></button> */}
        <button className="" onClick={deleteSticky}><i class="fa fa-minus-circle" aria-hidden="true"></i></button>


      </div>
      <div>
        {note}
      </div>
    </div>
  )
}

export default StickyNote
