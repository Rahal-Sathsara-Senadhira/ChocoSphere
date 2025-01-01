import * as React from 'react';
import { useEffect } from 'react';
import  './Header.css';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = () => {
    useEffect(() => {
        const navbar = document.querySelector('.navbar-container');
        const cartItem = document.querySelector('.cart-items-container');
        const searchForm = document.querySelector('.search-form');
        const menuBtn = document.querySelector('#menu-btn');
        const basketBtn = document.querySelector('#basket-btn');
        const searchBtn = document.querySelector('#search-btn');
    
        const toggleNavbar = () => {
          navbar?.classList.toggle('active');
          searchForm?.classList.remove('active');
          cartItem?.classList.remove('active');
        };
    
        const toggleCart = () => {
          cartItem?.classList.toggle('active');
          searchForm?.classList.remove('active');
          navbar?.classList.remove('active');
        };
    
        const toggleSearch = () => {
          searchForm?.classList.toggle('active');
          navbar?.classList.remove('active');
          cartItem?.classList.remove('active');
        };
    
        menuBtn?.addEventListener('click', toggleNavbar);
        basketBtn?.addEventListener('click', toggleCart);
        searchBtn?.addEventListener('click', toggleSearch);
    
        return () => {
          menuBtn?.removeEventListener('click', toggleNavbar);
          basketBtn?.removeEventListener('click', toggleCart);
          searchBtn?.removeEventListener('click', toggleSearch);
        };
      }, []);
    
  return (
    <header className="header-container">
            <div className="mobileview">
                <a href="#" className="MainLogo">
                    <img src="Resources/Default Images/MainLogo.png" alt="Main Logo" />
                </a>
            </div>
            <div className="header">
                <div className="hamburgerMenu" id="menu-btn">
                    <div className="openbtn-area hamburgerMenu_container">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <a href="#" className="MainLogo">
                    <img src="Resources/Default Images/MainLogo.png" alt="Main Logo" />
                </a>
                <div className="navbar-container">
                    <nav className="navbar">
                        <a href="#"><span>HOME</span></a>
                        <a href="#"><span>CHOCOLATES</span></a>
                        <a href="#"><span>WRAPPER</span></a>
                        <a href="#"><span>PAGES</span></a>
                        <a href="#" className="fish"><span>CONTACT</span></a>
                    </nav>
                </div>
                <div className="icons">
                    <a className="icon" id="basket-btn">
                        <img src="Resources/Default Images/BasketIcon.png" alt="Basket Icon" />
                    </a>
                    <a className="icon" id="search-btn">
                        <img src="Resources/Default Images/SearchIcon.png" alt="Search Icon" />
                    </a>
                </div>
                <div className="search-form">
                    <input type="search" id="search-box" placeholder="Search here..." />
                    <label htmlFor="search-box" className="search-form-btn">
                        <i className="fi fi-br-search"></i>
                    </label>
                </div>
                <div className="cart-items-container">
                    {[...Array(3)].map((_, index) => (
                        <div className="cart-item" key={index}>
                            <div className="img-container">
                                <img src="Resources/Product Images/diary milk 75g.jpg" alt="Cart Item" />
                            </div>
                            <div className="content-container">
                                <div className="content">
                                    <h3>Cart item {index + 1}</h3>
                                    <div className="price">Rs 230</div>
                                </div>
                                <div className="crud-operations">
                                    <div className="calculating">
                                        <button>-</button>
                                        <label className="quantity">4</label>
                                        <button>+</button>
                                    </div>
                                    <div className="delete">
                                        <i className="fi fi-rr-trash"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <button className="button-style-2 checkout">Checkout Now</button>
                    <div className="summary">
                        <div>
                            <label>Items</label><label>4</label>
                        </div>
                        <div>
                            <label>Total</label><label>Rs 2300</label>
                        </div>
                    </div>
                </div>
            </div>
        </header>
  );
};

export default Header;
