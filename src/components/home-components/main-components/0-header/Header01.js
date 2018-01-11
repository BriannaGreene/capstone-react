import React, { Component } from 'react'
import { connect } from 'react-redux'


class Header01 extends Component {

  render() {
    console.log('props from header 1', this.props.auth);
    return (
      <div>
        <h2 className="main-heading">Hello, {this.props.auth.first_name}!</h2>
        <span className="main-sub-heading">{this.props.auth.team} - {this.props.auth.group}</span>
      </div>
    )

  }

}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header01)
