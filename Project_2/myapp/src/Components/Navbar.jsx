import React from 'react';
import { Link } from 'react-router-dom';
import "../Assets/CSS/content.css";

function Navbar({ onSidebarToggle }) {
  return (
    <>
      <header className="header">
        <div className="header_one">
          <a href="" className="logo">
            <i className="fas fa-book" style={{ marginLeft: 1 }}>YEHDU++</i>
          </a>
          <form action="" className="search-form">
            <input id="search-box" type="search" placeholder="search here..." />
            <label htmlFor="" className="fas fa-search"></label>
          </form>
          <div className="icons">
            <div id="search-btn" className="fas fa-search"></div>
            <a href="" className="fas fa-heart"></a>
            <a href="" className="fas fa-shopping-cart"></a>
            <Link to='/login'>
              <div id="login-btn" className="fas fa-user"></div>
            </Link>
            <Link to='/'>
              <div id="home" className="fa-solid fa-arrow-right-from-bracket"></div>
            </Link>
          </div>
        </div>
        <div className="header_two">
          <div className="navbar">
            <Link to='/'>
              <a href="home">Home</a>
            </Link>
            <Link to = '/newarrival'>
            <a href="newarrival">New Arrival</a>
            </Link>
            <Link to='/featured'>
              <a href="featured">Featured</a>
            </Link>
            <Link to='/topoffers'>
            <a href="topoffers">Top Offers</a>
            </Link>
          </div>
        </div>
      </header>
      <div className="bottom-navbar">
        <a href="/home" className="fas fa-home"></a>
        <a href="/newarrivals" className="fas fa-tags"></a>
        <a href="/featured" className="fas fa-list"></a>
        <a href="/topoffers" className="fas fa-app-store"></a>
      </div>
    </>
  );
}

export default Navbar;
