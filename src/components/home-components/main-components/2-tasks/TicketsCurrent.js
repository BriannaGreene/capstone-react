import React from 'react'
import { connect } from 'react-redux'
import Task from './Task'





const TicketsCurrent = ( state ) => {

  let tickets = state.user_tickets
  let inProgress = tickets.filter(item => item.status === "in progress")
  let toDo = tickets.filter(item => item.status === "to do")

  console.log('inprogress items: ', inProgress);
  console.log('to do: ', toDo);
  const ticketsInProgress = inProgress.map(item => (
    <Task
      key={item.id}
      id={item.id}
      title={item.title}
      description={item.description}
    />
  ))

  const ticketsToDo = toDo.map(item => (
    <Task
      key={item.id}
      id={item.id}
      title={item.title}
      description={item.description}
    />
  ))



    return (
        <div>
          <div>
            <h3>In Progress</h3>
          </div>
          <div>
            { ticketsInProgress }
          </div>
          <div>
            <h3>To Do</h3>
          </div>
          <div>
            { ticketsToDo }
          </div>
        </div>

    )


}

function mapStateToProps({ user_tickets }) {
  return { user_tickets }
}

export default connect(mapStateToProps)(TicketsCurrent)
