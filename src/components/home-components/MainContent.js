import React from 'react'
import { Route, Switch } from 'react-router-dom'

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
      <div className="div">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/tasks" component={Tasks} />
          <Route exact path="/sprint" component={Sprint} />
          <Route exact path="/backlog" component={Backlog} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/messages" component={Messages} />
        </Switch>
      </div>
    </div>
  )
}

export default MainContent
