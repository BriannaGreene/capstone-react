import React from 'react'
import Label from './Label'

const Task = ({
  id,
  title,
  description,
  status,
  labels,
  team,
  assignees,
  priority
}) => {

  // let labelsArray = labels.labels

  const renderLabels = labels.labels.map(name => (
    <Label
      color={`label ${name}`}
    />
  ))

  return (
    <div className="ticket-container">
      <div className="ticket-title-container">
        <div className="labels-container">
          {renderLabels}
        </div>
        <span>{title}</span>
      </div>
      <div className="ticket-assignees-container">assignees</div>
      <div className="ticket-status-container">progress status graph</div>
    </div>
  )
}

export default Task
