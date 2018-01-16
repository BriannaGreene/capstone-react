import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import TicketsCurrent from './TicketsCurrent'
import TicketsComplete from './TicketsComplete'
import TicketsAll from './TicketsAll'

const Tasks = () => {
  return (
    <div className="task-body">
      <ul className="tasks-nav">
        <li><NavLink to="/tasks" className="tasks-nav-li">My Current Tasks</NavLink></li>
        <li>  |  </li>
        <li><NavLink to="/tasks/complete" className="tasks-nav-li">My Complete Tasks</NavLink></li>
        <li>  |  </li>
        <li><NavLink to="/tasks/all" className="tasks-nav-li">All My Tasks</NavLink></li>
      </ul>
      <div>
        <Switch>
          <Route exact path="/tasks" component={TicketsCurrent}></Route>
          <Route exact path="/tasks/complete" component={TicketsComplete}></Route>
          <Route exact path="/tasks/all" component={TicketsAll}></Route>
        </Switch>
      </div>
    </div>
  )
}

export default Tasks






// import React from 'react'
// import { connect } from 'react-redux'
// import TasksBody from './TasksBody'
//
//
//
//
//
// const Tasks = ( state ) => {
//
//   let tickets = state.user_tickets
//   let inProgress = tickets.filter(item => item.status === "in progress")
//   let toDo = tickets.filter(item => item.status === "to do")
//
//   console.log('inprogress items: ', inProgress);
//   console.log('to do: ', toDo);
//   const ticketsInProgress = inProgress.map(item => (
//     <Task
//       key={item.id}
//       id={item.id}
//       title={item.title}
//       description={item.description}
//     />
//   ))
//
//   const ticketsToDo = toDo.map(item => (
//     <Task
//       key={item.id}
//       id={item.id}
//       title={item.title}
//       description={item.description}
//     />
//   ))
//
//
//
//     return (
//       <div className="main-body">
//         <div className="main-body-top">
//           <div>
//             <h2>Your Tasks</h2>
//           </div>
//           <div>
//             tickets
//           </div>
//           <div>
//             inprogress header
//           </div>
//           <div>
//             { ticketsInProgress }
//           </div>
//           <div>
//             to do header
//           </div>
//           <div>
//             { ticketsToDo }
//           </div>
//         </div>
//
//       </div>
//     )
//
//
// }
//
// function mapStateToProps({ user_tickets }) {
//   return { user_tickets }
// }
//
// export default connect(mapStateToProps)(Tasks)
