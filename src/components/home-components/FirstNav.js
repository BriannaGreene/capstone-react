import React from 'react'
// import { NavLink } from 'react-router-dom'

const FirstNav = () => {
  return (
    <div id="first-nav">
      <div id="icon-holder">
        <div id="avatar" className="sidebar-icon">
          <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
        </div>
        <div id="home-icon" className="sidebar-icon">
          <i className="fa fa-home fa-2x" aria-hidden="true"></i>
        </div>
        <div id="search-icon" className="sidebar-icon">
          <i className="fa fa-search fa-2x" aria-hidden="true"></i>
        </div>
        <div id="settings-icon" className="sidebar-icon">
          <i className="fa fa-cog fa-2x" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  )
}

export default FirstNav
