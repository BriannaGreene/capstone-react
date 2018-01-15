import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
let link = `${process.env.REACT_APP_API}/auth/google`

class Landing extends Component {

  // componentDidMount() {
  //   this.state.getTickets()
  //   this.state.getStickies()
  //   this.state.getMessages()
  // }

  render() {
    return (
      <div className="landing-container">
        <div className="landing-left">
          <h1>Nimble.</h1>
          <h4>Ticket tracking for Nimble Teams</h4>
          <div>
            <button><a href="http://localhost:5000/api/current_user">Current User</a></button>
            <button><a href="http://localhost:5000/auth/google">Auth Sign Up</a></button>
          </div>
        </div>
        <div className="landing-right">
          <a href='https://www.freepik.com/free-vector/funny-dinos-pattern_870965.htm'>Designed by Freepik</a>
        </div>
      </div>
    )
  }

}


function mapStateToProps({ }) {
  return {  }
}

// const mapDispatchToProps = dispatch => ({
//    actions: bindActionCreators(actions, dispatch)
// })

export default connect(mapStateToProps, actions)(Landing)
// export default Home
// export default Landing
