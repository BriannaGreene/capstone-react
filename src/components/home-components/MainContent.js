import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
import Dashboard from './main-components/1-dashboard/Dashboard'
import Tasks from './main-components/2-tasks/Tasks'
import Sprint from './main-components/3-sprint/Sprint'
import Backlog from './main-components/4-backlog/Backlog'
import Team from './main-components/5-team/Team'
import Messages from './main-components/6-messages/Messages'

const MainContent = () => {
  return (
    <div id="main-content">
      <div className="main-header">
        <Header />
      </div>
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
