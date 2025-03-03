import React, { useContext, useState } from "react";
import "./Navbar.css";
import { DefaultAssets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isSearchFormActive, setIsSearchFormActive] = useState(false);

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    setToken("")
    navigate("/")
  };

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
      <Link to="/">
        <div className="Navbar-mobile">
          <img src={DefaultAssets.HeaderMainLogo} alt="" />
        </div>
      </Link>
      <div className="Navbar-normal">
        <div
          className={`ham-menu ${isNavbarActive ? "active" : ""}`}
          onClick={toggleNavbar}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link to="/">
          <div className="main-logo">
            <img src={DefaultAssets.HeaderMainLogo} alt="" />
          </div>
        </Link>
        <div className={`nav-container ${isNavbarActive ? "active" : ""}`}>
          <div className="nav">
            <Link to="/">Home</Link>
            <a href="">Chocolates</a>
            <a href="">Wrapper</a>
            <a className="nav-last" href="">
              Contact
            </a>
          </div>
        </div>

        <div className="navbar-right">
          <Link to="/cart">
            <div className="Icon bascket">
              <img src={DefaultAssets.BasketIcon} alt="" />
              <div className={getTotalCartAmount() ? "dot" : ""}></div>
            </div>
          </Link>
          {!token ? (
            <div className="Icon" onClick={() => setShowLogin(true)}>
              <img src={DefaultAssets.UserIcon} alt="" />
            </div>
          ) : (
            <div className="Icon">
              <div className="navbar-profile">
                <img
                  src={DefaultAssets.UserIcon}
                  alt=""
                  onClick={() => setShowLogin(true)}
                />

                <ul className="navbar-profile-dropdown">
                  <li onClick={() => navigate('/myorders')}>My Orders</li>
                  <li onClick={() => logOut()}>Log out</li>

                </ul>
              </div>
            </div>
          )}

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
