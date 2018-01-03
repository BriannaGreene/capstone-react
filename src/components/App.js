import React, { Component } from 'react'

import FirstNav from './main-components/FirstNav'
import SecondNav from './main-components/SecondNav'
import MainContent from './main-components/MainContent'

const API = `${process.env.API}`

class App extends Component {
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

export default App
