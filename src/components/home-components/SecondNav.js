import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class SecondNav extends Component {
  render() {
    return (
      <div id="second-nav">
        <div id="nav-link-holder">

          <div className="nav-item-box">
            <div className="nav-icon">
              <img id="project-avatar" src=".././images/dino-avatar.png" alt="icon"></img>
            </div>
            <div id="nav-header-text">
              <h2 id="project-teamname">Team Name</h2>
              <h5 id="project-subtitle">Sprint Name - like new years renovation 2018</h5>
            </div>
          </div>
          <div className="nav-item-box">
            <div className="nav-icon">
              <NavLink to="/">
                <i className="fa fa-sticky-note fa-2x" aria-hidden="true"></i>
              </NavLink>
            </div>
            <div className="nav-text-box">
              <NavLink to="/">My Dashboard</NavLink>
            </div>
          </div>
          <div className="nav-item-box">
            <div className="nav-icon">
              <NavLink to="/tasks">
                <i className="fa fa-check-circle fa-2x"></i>
              </NavLink>
            </div>
            <div className="nav-text-box" refresh="true">
              <NavLink to="/tasks">Current Tasks</NavLink>
            </div>
          </div>
          <div className="nav-item-box">
            <div className="nav-icon">
              <NavLink to="/sprint">
                <i className="fa fa-tasks fa-2x"></i>
              </NavLink>
            </div>
            <div className="nav-text-box">
              <NavLink to="/sprint">Sprint Overview</NavLink>
            </div>
          </div>
          <div className="nav-item-box">
            <div className="nav-icon">
              <NavLink to="/backlog">
                <i className="fa fa-backward fa-2x"></i>
              </NavLink>
            </div>
            <div className="nav-text-box">
              <NavLink to="/backlog">Task Backlog</NavLink>
            </div>
          </div>
          <div className="nav-item-box">
            <div className="nav-icon">
              <NavLink to="/team">
                <i className="fa fa-hand-peace-o fa-2x"></i>
              </NavLink>
            </div>
            <div className="nav-text-box">
              <NavLink to="/team">Team Members</NavLink>
            </div>
          </div>
          <div className="nav-item-box">
            <div className="nav-icon">
              <NavLink to="/messages">
                <i className="fa fa-comment fa-2x"></i>
              </NavLink>
            </div>
            <div className="nav-text-box">
              <NavLink to="/messages">Messages</NavLink>
            </div>
          </div>

        </div>
      </div>
    )
  }
}


export default SecondNav
