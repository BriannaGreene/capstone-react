import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './Landing'
import Home from './Home'

const API = `${process.env.API}`

class App extends Component {
  render() {
    return (
      <div className="div">
        <BrowserRouter>
          <div className="div">
            <Route exact path="/" component={Landing} />
            <Route path="/home" component={Home} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
