import React from 'react'
import { connect } from 'react-redux'
import Task from './Task'
import * as actions from '../../../../actions'

const TicketsCurrent = ( state ) => {
  let tickets = state.user_tickets
  let inProgress = []
  let toDo = []

  if (tickets !== null) {
    inProgress = tickets.filter(item => item.status === "in progress")
    toDo = tickets.filter(item => item.status === "to do")
  }

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
      hoursIn={item.hours_complete}
      hoursOut={item.hours_to_complete}
      priority={item.priority}
      state={state}

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
      hoursIn={item.hours_complete}
      hoursOut={item.hours_to_complete}
      priority={item.priority}
      state={state}
    />
  ))
  console.log('state from tickets current: ', state);

  const newTicket = (e) => {
    e.preventDefault()
    let team = 'g62'
    let title = ''
    let assignees = '{ "assignees": [11] }'
    state.newTask(team, title, assignees)
    // state.newSticky(user_id)
    window.location.href = '/tasks'

  }



  return (
      <div>
        <div className="ticket-title-holder">
          <div className="ticket-title-one">
            <span className="tickets-section-title">In Progress</span>
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
          { ticketsInProgress }
        </div>

        <div className="ticket-title-holder">
          <div className="ticket-title-one">
            <span className="tickets-section-title">To Do</span>
          </div>
          <div className="ticket-title-four">
            <span className="tickets-section-title"></span>
          </div>
          <div className="ticket-title-two">
            <span className="tickets-section-title"></span>
          </div>
          <div className="ticket-title-three">
            <button id="new-ticket-button" onClick={newTicket}>NEW TICKET</button>
          </div>
        </div>

        <div className="ticket-block">
          { ticketsToDo }
        </div>
      </div>
  )
}

function mapStateToProps({ user_tickets, users }) {
  return { user_tickets, users }
}

export default connect(mapStateToProps, actions)(TicketsCurrent)
