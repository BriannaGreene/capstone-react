import React from 'react'
import Label from './Label'
import { connect } from 'react-redux'
import * as actions from '../../../../actions'

const Task = ({
  id,
  title,
  description,
  status,
  labels,
  team,
  assignees,
  priority,
}) => {


  const renderLabels = labels.labels.map(name => (
    <Label
      color={`label ${name}`}
    />
  ))

  // const renderAssignees = assignees.assignees.map(person => {
  //   console.log(person)
  //   let personInfo = props.getUser()
  // })

  return (
    <div className="ticket-container">
      <div className="ticket-title-container">
        <div className="labels-container">
          {renderLabels}
        </div>
        <span className="ticket-title">{title}</span>
      </div>
      <div className="ticket-assignees-container">assignees</div>
      <div className="ticket-status-container">{status}</div>
    </div>
  )
}

function mapStateToProps({ user }) {
  return { user }
}

export default connect(mapStateToProps, actions)(Task)
// export default Task
