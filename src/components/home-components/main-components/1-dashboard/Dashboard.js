import React from 'react'
import DashboardTime from './DashboardTime'
import DashboardNotes from './DashboardNotes'
import DashboardContacts from './DashboardContacts'

const Dashboard = () => {
  return (

    <div className="main-body">
      <div className="main-body-top">
        <div className="top-left">
          <DashboardTime />
        </div>
        <div>
          <DashboardNotes />
        </div>
      </div>
      <div>
        <DashboardContacts />
      </div>
    </div>

  )
}

export default Dashboard
