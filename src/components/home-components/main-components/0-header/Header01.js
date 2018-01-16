import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header01 extends Component {
  render() {
    return (
      <div id="header01">
        <h2 className="main-heading">Hello, {this.props.auth.first_name} !</h2>
        <button id="logout-button"><a href="https://nimble-api.herokuapp.com/api/logout">LOGOUT</a></button>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header01)
