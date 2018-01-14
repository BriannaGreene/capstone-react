import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../../actions'
import Label from './Label'
import Assignees from './Assignees'

const Task = ({
  id,
  title,
  description,
  status,
  labels,
  team,
  assignees,
  hoursIn,
  hoursOut,
  priority,
  state,
}) => {

  let key = 0
  let statusColor = 'grey'

  if (status === 'in progress') {
    statusColor = '#25A88D'
  }
  if (status === 'to do') {
    statusColor = '#ee355d'
  }


  const renderLabels = labels.labels.map(name => (
    <Label
      key={key}
      color={`label ${name}`}
    />
  ))

  const renderAssignees = assignees.assignees.map(person => {
    let initials = ''
    for (var i = 0; i < state.users.length; i++) {
      if (person === state.users[i].id) {
        initials = `${state.users[i].first_name[0]}${state.users[i].last_name[0]}`
      }
    }
    console.log(initials);
    return (
      <Assignees member={initials}/>
    )
  })

  return (
    <div className="ticket-container" draggable="true">
      <div className="ticket-title-container">
        <div className="labels-container">
          {renderLabels}
        </div>
        <span className="ticket-title">{title}</span>
      </div>
      <div className="ticket-hours-container">
        {hoursIn} / {hoursOut}
      </div>
      <div className="ticket-assignees-container">
        {renderAssignees}
      </div>
      <div className="ticket-status-container">
        <div className="status" style={{'backgroundColor': statusColor}}>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps({ user }) {
  return { user }
}

export default connect(mapStateToProps, actions)(Task)
// export default Task
