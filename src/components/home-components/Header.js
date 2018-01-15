import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header01 from './main-components/0-header/Header01'
import Header02 from './main-components/0-header/Header02'
import Header03 from './main-components/0-header/Header03'
import Header04 from './main-components/0-header/Header04'
import Header05 from './main-components/0-header/Header05'
import Header06 from './main-components/0-header/Header06'


const Header = () => {
  return (
    <div id="header-container">
      <Switch>
        <Route exact path="/" component={Header01} />
        <Route path="/tasks" component={Header02} />
        <Route exact path="/sprint" component={Header03} />
        <Route exact path="/backlog" component={Header04} />
        <Route exact path="/team" component={Header05} />
        <Route exact path="/messages" component={Header06} />
      </Switch>
    </div>
  )
}

export default Header
