import React from 'react'

const Task = ({ id, title, description }) => {
  console.log('from task: ', id);
  
  return (
    <div className="div">
      <h2>Ticket</h2>
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
