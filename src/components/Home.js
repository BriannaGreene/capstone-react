import React from 'react'
import FirstNav from './home-components/FirstNav'
import SecondNav from './home-components/SecondNav'
import MainContent from './home-components/MainContent'

const Home = ({ props }) => {
  return (
    <div className="container-fluid">
      <FirstNav />
      <SecondNav />
      <MainContent />
    </div>
  )
}

export default Home
