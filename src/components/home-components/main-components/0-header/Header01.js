import React, { Component } from 'react'
import { connect } from 'react-redux'



class Header01 extends Component {


  render() {
    console.log('props from header 1', this.props.auth);
    return (
      <div className="main-header-left">
        <h2 className="main-heading">Hello, Bri!</h2>
        <span>Team Name - Group Name</span>
      </div>
    )

  }

}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header01)
