import React from 'react'



const Task = ({ id, title, description }) => {

  return (
    <div className="ticket-container">
      <div className="ticket-title-container">
        <div className="labels-container">labels</div>
        <span>{title}</span>
      </div>
      <div className="ticket-assignees-container">
        assignees
      </div>
      <div className="ticket-status-container">
        progress status graph
      </div>
    </div>
  )
}

export default Task
