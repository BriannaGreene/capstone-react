import React from 'react'
import { connect } from 'react-redux'
import Task from './Task'


const TicketsCurrent = ( state ) => {
  let tickets = state.user_tickets
  let inProgress = tickets.filter(item => item.status === "in progress")
  let toDo = tickets.filter(item => item.status === "to do")

  const ticketsInProgress = inProgress.map(item => (
    <Task
      key={item.id}
      id={item.id}
      title={item.title}
      description={item.description}
      status={item.status}
      labels={item.labels}
      team={item.team}
      assignees={item.assignees}
      priority={item.priority}
    />
  ))

  const ticketsToDo = toDo.map(item => (
    <Task
      key={item.id}
      id={item.id}
      title={item.title}
      description={item.description}
      status={item.status}
      labels={item.labels}
      team={item.team}
      assignees={item.assignees}
      priority={item.priority}
    />
  ))

  return (
      <div>
        <div className="ticket-title-holder">
          <div className="ticket-title-one">
            <span className="tickets-section-title">In Progress</span>
          </div>
          <div className="ticket-title-two">
            <span className="tickets-section-title">Assignees</span>
          </div>
          <div className="ticket-title-three">
            <span className="tickets-section-title">Status</span>
          </div>
        </div>


        <div className="ticket-block">
          { ticketsInProgress }
        </div>
        <div>
          <span className="tickets-section-title">To Do</span>
        </div>
        <div className="ticket-block">
          { ticketsToDo }
        </div>
      </div>
  )
}

function mapStateToProps({ user_tickets }) {
  return { user_tickets }
}

export default connect(mapStateToProps)(TicketsCurrent)
