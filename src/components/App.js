import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Landing from './Landing'
import Home from './Home'
require('dotenv').config()

class App extends Component {

  async componentDidMount() {
    this.props.fetchUser()
    this.props.getTickets()
    this.props.allUsers()
    this.props.getMessages()
    this.props.getStickies()
    this.props.getWeather()
  }

  render() {
    return (
      <div className="div">
        <BrowserRouter>
          <div className="div">
            { this.props.auth === false || this.props.auth === null ?
              <Route exact path="/" component={Landing} /> :
              <Route path="/" component={Home} />
            }
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

function mapStateToProps({ auth, users, user_tickets, weather, messages, stickies }) {
  return { auth, users, user_tickets, weather, messages, stickies }
}

export default connect(mapStateToProps, actions)(App)
