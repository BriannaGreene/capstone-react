import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class SecondNav extends Component {
  render() {
    return (
      <div id="second-nav">
        <div id="nav-link-holder">
          <div id="nav-item-header">
            <div id="avatar-icon">
            </div>
            <div id="nav-header-text">
              <h2 id="project-teamname">Team g62</h2>
              <span id="project-subtitle">CAPSTONE PRESENTATIONS</span>
            </div>
          </div>
          <div className="nav-item-box">
            <div className="nav-icon">
              <NavLink to="/">
                <i className="fa fa-sticky-note fa-2x second-icon" aria-hidden="true"></i>
              </NavLink>
            </div>
            <div className="nav-text-box">
              <NavLink to="/" className="second-text">My Dashboard</NavLink>
            </div>
          </div>
          <div className="nav-item-box">
            <div className="nav-icon">
              <NavLink to="/tasks">
                <i className="fa fa-check-circle fa-2x second-icon"></i>
              </NavLink>
            </div>
            <div className="nav-text-box" refresh="true">
              <NavLink to="/tasks" className="second-text">Current Tasks</NavLink>
            </div>
          </div>
          <div className="nav-item-box">
            <div className="nav-icon">
              <NavLink to="/sprint">
                <i className="fa fa-tasks fa-2x second-icon"></i>
              </NavLink>
            </div>
            <div className="nav-text-box">
              <NavLink to="/sprint" className="second-text">Sprint Overview</NavLink>
            </div>
          </div>
          {/* <div className="nav-item-box">
            <div className="nav-icon">
              <NavLink to="/backlog">
                <i className="fa fa-backward fa-2x second-icon"></i>
              </NavLink>
            </div>
            <div className="nav-text-box">
              <NavLink to="/backlog" className="second-text">Task Backlog</NavLink>
            </div>
          </div>
          <div className="nav-item-box">
            <div className="nav-icon">
              <NavLink to="/team">
                <i className="fa fa-hand-peace-o fa-2x second-icon"></i>
              </NavLink>
            </div>
            <div className="nav-text-box">
              <NavLink to="/team" className="second-text">Team Members</NavLink>
            </div>
          </div> */}
          <div className="nav-item-box">
            <div className="nav-icon">
              <NavLink to="/messages">
                <i className="fa fa-comment fa-2x second-icon"></i>
              </NavLink>
            </div>
            <div className="nav-text-box">
              <NavLink to="/messages" className="second-text">Messages</NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SecondNav
