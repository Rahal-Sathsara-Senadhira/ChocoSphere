import React from 'react'
import './SideBar.css'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <p>Add Items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
          <p>List Items</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default SideBar