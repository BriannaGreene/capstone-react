import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import FirstNav from './home-components/FirstNav'
import SecondNav from './home-components/SecondNav'
import MainContent from './home-components/MainContent'

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <FirstNav />
        <SecondNav />
        <MainContent />
      </div>
    )
  }
}

function mapStateToProps({ }) {
  return {  }
}

export default connect(mapStateToProps, actions)(Home)
