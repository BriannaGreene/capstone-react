import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
// import { bindActionCreators } from 'redux'

import Landing from './Landing'
import Home from './Home'
// const API = process.env.REACT_APP_API


class App extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     tickets: []
  //   }
  // }

  componentDidMount() {
    console.log(this.props)
    this.props.fetchUser()
    // const responseGroups = await fetch(`${API}/groups`)
    // const groups = await responseGroups.json()
    // console.log(groups);
    // this.dispatch({type: 'FETCH_USER'})
  }

  // renderContent() {
  //   switch (this.props.auth) {
  //     case null:
  //
  //     case false:
  //
  //     default:
  //
  //   }
  // }

  render() {
    console.log('props from app render', this.props);
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

function mapStateToProps({ auth }) {
  return { auth }
}

// const mapDispatchToProps = dispatch => ({
//    actions: bindActionCreators(actions, dispatch)
// })

export default connect(mapStateToProps, actions)(App)
