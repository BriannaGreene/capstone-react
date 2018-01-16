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

  let statusColor = 'grey'
  if (status === 'in progress') { statusColor = '#83ba33' }
  if (status === 'to do') { statusColor = '#ee355d' }

  const renderLabels = labels.labels.map(name => (
    <Label color={`label ${name}`} />
  ))

  const renderAssignees = assignees.assignees.map(person => {
    let initials = ''
    let color = 'member-holder yellow'
    if (person === 1) { color = 'member-holder orange' }
    if (person === 2) { color = 'member-holder purple' }
    if (person === 3) { color = 'member-holder purple' }
    if (person === 4) { color = 'member-holder blue' }
    if (person === 5) { color = 'member-holder midblue' }
    if (person === 6) { color = 'member-holder darkblue' }
    if (person === 7) { color = 'member-holder orange' }
    if (person === 11) { color = 'member-holder pink' }
    for (var i = 0; i < state.users.length; i++) {
      if (person === state.users[i].id) {
        initials = `${state.users[i].first_name[0]}${state.users[i].last_name[0]}`
      }
    }
    return (
      <Assignees member={initials} color={color}/>
    )
  })



  const updateTitle = (e) => {
    e.preventDefault()
    let text = e.target.value
    console.log(e.target.value);
    state.updateTitle(id, text)
  }

  const updateHoursIn = (e) => {
    e.preventDefault()
    let number = e.target.value
    state.editHoursIn(id, number)
    // window.location.href = '/tasks'
  }

  const updateHoursOut = (e) => {
    e.preventDefault()
    let number = e.target.value
    state.editHoursOut(id, number)
    // window.location.href = '/tasks'
  }

  const updateAssignees = (e) => {
    e.preventDefault()

  }

  const updateStatus = (e) => {
    e.preventDefault()
    let newStatus = 'done'
    if (statusColor === '#ee355d') { newStatus = 'in progress'}
    if (statusColor === '#83ba33') { newStatus = 'done'}
    state.updateStatus(id, newStatus)
    window.location.href = '/tasks'
  }



  return (
    <div className="ticket-container" >
      <div className="ticket-title-container">
        <div className="labels-container">
          {renderLabels}
        </div>
        <textarea className="ticket-title" rows="1" onChange={updateTitle} defaultValue={title}></textarea>
      </div>
      <div className="ticket-hours-container">
        <textarea className="ticket-hours" resize="none" name="text" rows="1" cols="1" onChange={updateHoursIn} defaultValue={hoursIn}></textarea> /  <textarea className="ticket-hours" name="text" rows="1" cols="1" onChange={updateHoursOut} defaultValue={hoursOut}></textarea>
      </div>
      <div className="ticket-assignees-container" onClick={updateAssignees}>
        {renderAssignees}
      </div>
      <div className="ticket-status-container">
        <div className="status" style={{'backgroundColor': statusColor}} onClick={updateStatus}>
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
