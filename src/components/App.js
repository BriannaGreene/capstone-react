import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Landing from './Landing'
import Home from './Home'
require('dotenv').config()
// const API = process.env.REACT_APP_API


class App extends Component {

  async componentDidMount() {
    this.props.fetchUser()
    this.props.getTickets()
    this.props.allUsers()
    // this.props.getWeather()
    this.props.getMessages()
    this.props.getStickies()
    // const currentUser = await fetch(`http://localhost:5000/api/current_user`)
    // const userData = await currentUser.json()
    // console.log('USER DATA FROM APP JS: ', userData);
    // this.setState({ denver: denverdata })
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
