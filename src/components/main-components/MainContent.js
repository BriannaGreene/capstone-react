import React from 'react'
import DashboardTime from '../sub-components/DashboardTime'
import DashboardNotes from '../sub-components/DashboardNotes'
import DashboardContacts from '../sub-components/DashboardContacts'

const MainContent = () => {
  return (
    <div id="main-content">
      <div id="main-header">
        <div id="main-header-left">
          <h2 id="main-heading">Hello, Bri!</h2>
          <span>Team Name - Group Name</span>
        </div>
      </div>
      <div id="main-body">
        <div id="main-body-top">
          <div id="top-left">
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
    </div>
  )
}

export default MainContent
