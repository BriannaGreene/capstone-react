import React from 'react'
import { connect } from 'react-redux'
import Task from './Task'

const TicketsComplete = ( state ) => {

  let tickets = state.user_tickets
  let done = tickets.filter(item => item.status === "done")

  const ticketsDone = done.map(item => (
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
          <h2>Your Tasks</h2>
        </div>
        <div>
          tickets
        </div>
        <div>
          done header
        </div>
        <div>
          { ticketsDone }
        </div>
      </div>
  )


}

function mapStateToProps({ user_tickets }) {
  return { user_tickets }
}

export default connect(mapStateToProps)(TicketsComplete)
