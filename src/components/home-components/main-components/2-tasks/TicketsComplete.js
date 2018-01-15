import React from 'react'
import { connect } from 'react-redux'
import Task from './Task'

const TicketsComplete = ( state ) => {
  let tickets = state.user_tickets
  let ticketsDone = []

  if (tickets !== null) {
    let done = tickets.filter(item => item.status === "done")
    ticketsDone = done.map(item => (
      <Task
        key={item.id}
        id={item.id}
        title={item.title}
        description={item.description}
        status={item.status}
        labels={item.labels}
        team={item.team}
        assignees={item.assignees}
        hoursIn={item.hours_complete}
        hoursOut={item.hours_to_complete}
        priority={item.priority}
        state={state}
      />
    ))
  }


  return (
      <div>
        <div className="ticket-title-holder">
          <div className="ticket-title-one">
            <span className="tickets-section-title">Ticket Complete</span>
          </div>
          <div className="ticket-title-four">
            <span className="tickets-section-title">Hours</span>
          </div>
          <div className="ticket-title-two">
            <span className="tickets-section-title">Assignees</span>
          </div>
          <div className="ticket-title-three">
            <span className="tickets-section-title">Status</span>
          </div>
        </div>
        <div className="ticket-block">
          { ticketsDone }
        </div>
      </div>
  )


}

function mapStateToProps({ user_tickets, users }) {
  return { user_tickets, users }
}

export default connect(mapStateToProps)(TicketsComplete)
