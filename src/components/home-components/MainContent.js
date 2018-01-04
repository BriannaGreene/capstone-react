import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Dashboard from './main-components/dashboard/Dashboard'
import Tasks from './main-components/tasks/Tasks'
import Sprint from './main-components/sprint/Sprint'
import Backlog from './main-components/backlog/Backlog'
import Team from './main-components/team/Team'
import Messages from './main-components/messages/Messages'

const MainContent = () => {
  return (
    <div id="main-content">      
      <BrowserRouter>
        <div className="div">
          <Route exact path="/home" component={Dashboard} />
          <Route exact path="/home/tasks" component={Tasks} />
          <Route exact path="/home/sprint" component={Sprint} />
          <Route exact path="/home/backlog" component={Backlog} />
          <Route exact path="/home/team" component={Team} />
          <Route exact path="/home/messages" component={Messages} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default MainContent
