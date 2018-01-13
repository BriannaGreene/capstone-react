import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
// import { bindActionCreators } from 'redux'

import Landing from './Landing'
import Home from './Home'
// const API = process.env.REACT_APP_API


class App extends Component {

  componentDidMount() {
    this.props.fetchUser()
    this.props.getTickets()
    this.props.allUsers()
    // this.props.getWeather()
    this.props.getMessages()
    this.props.getStickies()
  }



  render() {
    console.log('PROPS FROM APP JS RENDER', this.props);
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

// const mapDispatchToProps = dispatch => ({
//    actions: bindActionCreators(actions, dispatch)
// })

export default connect(mapStateToProps, actions)(App)
