import React from 'react'


const StickyNote = ({note}) => {
  console.log('note from sticky notes ', note)

  return (
    <div className="sticky">
      {note}
    </div>
  )
}

export default StickyNote
