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
          <h1 id="nimble-title">Nimble.</h1>
          <span id="nimble-subtitle"></span>
          <div id="landing-button-container">
            <span>Sign in with Google</span>
            <button id="login-button"><a href="https://nimble-api.herokuapp.com/auth/google">GET STARTED</a></button>
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
