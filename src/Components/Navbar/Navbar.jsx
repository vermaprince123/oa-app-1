import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">OneAssist</div>
      <div className="nav">
        <a href="#">Home</a>
        <a href="#">Plans & Services</a>
        <a href="#">Claims & Support</a>
        <a href="#">About Us</a>
        <div className="search-container">
          <div className="search-icon"></div>
          <input type="text" placeholder="Search plans..." />
        </div>
        <div className="pincode-container">
          <div className="location-icon"></div>
          <input type="text" placeholder="Enter Pincode" />
        </div>
        <button className="login-button">Login / Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;