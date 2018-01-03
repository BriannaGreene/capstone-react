import React from 'react'

const SecondNav = () => {
  return (
    <div id="second-nav">
      <div id="nav-link-holder">

        <div className="nav-item-box">
          <div>
            <img id="project-avatar" className="nav-icon"></img>
          </div>
          <div id="nav-header-text">
            <h2 id="project-teamname">Team Name</h2>
            <h5 id="project-subtitle">Sprint Name - like new years renovation 2018</h5>
          </div>
        </div>

        <div className="nav-item-box">
          <div>
            <img className="nav-icon"></img>
          </div>
          <div className="nav-text-box">
            <span className="nav-link">My Dashboard</span>
          </div>
        </div>
        <div className="nav-item-box">
          <div>
            <img className="nav-icon"></img>
          </div>
          <div className="nav-text-box">
            <span className="nav-link">Current Tasks</span>
          </div>
        </div>
        <div className="nav-item-box">
          <div>
            <img className="nav-icon"></img>
          </div>
          <div className="nav-text-box">
            <span className="nav-link">Sprint Overview</span>
          </div>
        </div>
        <div className="nav-item-box">
          <div>
            <img className="nav-icon"></img>
          </div>
          <div className="nav-text-box">
            <span className="nav-link">Task Backlog</span>
          </div>
        </div>
        <div className="nav-item-box">
          <div>
            <img className="nav-icon"></img>
          </div>
          <div className="nav-text-box">
            <span className="nav-link">Team Members</span>
          </div>
        </div>
        <div className="nav-item-box">
          <div>
            <img className="nav-icon"></img>
          </div>
          <div className="nav-text-box">
            <span className="nav-link">Messages</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SecondNav
