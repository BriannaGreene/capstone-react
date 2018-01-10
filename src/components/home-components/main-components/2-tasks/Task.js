import React from 'react'



const Task = ({ id, title, description }) => {

  return (
    <div className="div">
      <h2>Ticket</h2>
      <div>
        {id}
      </div>
      <div>
        {title}
      </div>
      <div>
        {description}
      </div>
    </div>
  )
}

export default Task
