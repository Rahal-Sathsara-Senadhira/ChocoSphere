import React from 'react'
import './NavBar.css'
import { DefaultAssets } from '../../assets/assets'

const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={DefaultAssets.HeaderMainLogo} alt="" className="logo" />
        <img src={DefaultAssets.SearchIcon} alt="" className="profile" />
    </div>
  )
}

export default NavBar