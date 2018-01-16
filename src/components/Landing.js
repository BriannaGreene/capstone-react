import React, { Component } from 'react'

class Landing extends Component {

  render() {
    return (
      <div className="landing-container">
        <div className="landing-left">
          <h1 id="nimble-title">Nimble.</h1>
          <span id="nimble-subtitle"></span>
          <div id="landing-button-container">
            <span>Sign in with Google</span>
            <button id="login-button"><a href="http://localhost:5000/auth/google">GET STARTED</a></button>
          </div>
        </div>
        <div className="landing-right">
          <a href='https://www.freepik.com/free-vector/funny-dinos-pattern_870965.htm'>Designed by Freepik</a>
        </div>
      </div>
    )
  }
}

export default Landing
