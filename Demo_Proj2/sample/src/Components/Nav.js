import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ onSidebarToggle }) {
  return (
    <>
      <header className="header">
        <div className="header_one">
        <div id="sidebar" className="fa-solid fa-bars" style={{ marginLeft: 0 }} onClick={onSidebarToggle}></div>
          <a href="" className="logo">
            <i className="fas fa-book" style={{ marginLeft: 1 }}>RBLY</i>
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
            <Link to='/featured'>
              <a href="featured">Featured</a>
            </Link>
            <a href="#reviews">Reviews</a>
            <a href="#blogs">Blogs</a>
          </div>
        </div>
      </header>
      <div className="bottom-navbar">
        <a href="#home" className="fas fa-home"></a>
        <a href="#featured" className="fas fa-list"></a>
        <a href="#arrivals" className="fas fa-tags"></a>
        <a href="#blogs" className="fas fa-app-store"></a>
      </div>
    </>
  );
}

export default Nav;
