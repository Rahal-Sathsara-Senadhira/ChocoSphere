import React, { useState } from "react";
import "./Navbar.css";
import { DefaultAssets } from "../../assets/assets";

const Navbar = () => {

    const [isNavbarActive, setIsNavbarActive] = useState(false);
    const [isSearchFormActive, setIsSearchFormActive] = useState(false);
  
    const toggleNavbar = () => {
      setIsNavbarActive(!isNavbarActive);
      setIsSearchFormActive(false);
    };
  
    const toggleSearchForm = () => {
      setIsSearchFormActive(!isSearchFormActive);
      setIsNavbarActive(false);
    };
  
    



  return (
    <div className="Navbar">
      <div className="Navbar-mobile">
        <img src={DefaultAssets.HeaderMainLogo} alt="" />
      </div>

      <div className="Navbar-normal">

        <div className={`ham-menu ${isNavbarActive ? "active" : ""}`}
          onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="main-logo">
          <img src={DefaultAssets.HeaderMainLogo} alt="" />
        </div>

        <div className={`nav-container ${isNavbarActive ? "active" : ""}`}>
          <div className="nav">
            <a href="">Home</a>
            <a href="">Chocolates</a>
            <a href="">Wrapper</a>
            <a href="">Contact</a>
          </div>
        </div>

        <div className="navbar-right">
          <div className="Icon bascket">
            <img src={DefaultAssets.BasketIcon} alt="" />
            <div className="dot"></div>
          </div>
          <div className="Icon">
            <img src={DefaultAssets.UserIcon} alt="" />
          </div>
          <div className="Icon" onClick={toggleSearchForm}>
            <img src={DefaultAssets.SearchIcon} alt="" />
          </div>
          <div className={`search-form ${isSearchFormActive ? "active" : ""}`}>
          <input type="search" id="search-box" placeholder="Search here..." />
          <label htmlFor="search-box" className="search-form-btn">
            <i className="fi fi-br-search"></i>
          </label>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
