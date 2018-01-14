import React from 'react'

const Assignees = ({ member, color }) => {
  return (
    <div className={color}>
      {member}
    </div>
  )
}

export default Assignees
