import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import FirstNav from './home-components/FirstNav'
import SecondNav from './home-components/SecondNav'
import MainContent from './home-components/MainContent'

class Home extends Component {

  // componentDidMount() {
  //   this.props.fetchUser()
  //   this.props.getTickets()
  //   this.props.getStickies()
  //   this.props.getMessages()
  // }

  render() {
    console.log('home page rendering');
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

// const mapDispatchToProps = dispatch => ({
//    actions: bindActionCreators(actions, dispatch)
// })

export default connect(mapStateToProps, actions)(Home)
// export default Home
