import React from 'react'
import FirstNav from './main-components/FirstNav'
import SecondNav from './main-components/SecondNav'
import MainContent from './main-components/MainContent'

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <FirstNav />
      <SecondNav />
      <MainContent />
    </div>
  )
}

export default Dashboard
