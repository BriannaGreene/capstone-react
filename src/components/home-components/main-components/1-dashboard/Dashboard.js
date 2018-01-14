import React from 'react'
import DashboardWeather from './DashboardWeather'
import DashboardNotes from './DashboardNotes'

const Dashboard = () => {
  return (

    <div className="dash-body">

      <div className="dash-body-top">
        <DashboardWeather />
      </div>
      <div className="dash-body-bottom">
        <DashboardNotes />
      </div>
    </div>
  )
}

export default Dashboard
