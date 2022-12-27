import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/logo-zoom.png';

const Menu = () => (
  <>
  <p><a href="/home">Home</a></p>
  <p><a href="/location">Location</a></p>
  <p><a href="/registry">Registry</a></p>
  <p><a href="/photo_upload">Photo Upload</a></p>
  <p><a href="/wishes">Give Your Best Wishes</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
    return (
    <div className="wedding__navbar">
      <div className="wedding__navbar-links">
       <div className="wedding__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="wedding__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="wedding__navbar-sign">
        <p>SIGN IN</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="weddding_navbar-menu">
        {toggleMenu
        ? <RiCloseLine color="#fff" size={27} onClick ={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#fff" size={27} onClick ={() => setToggleMenu(true)} />}
      {toggleMenu && (
        <div className="wedding__navbar-menu_container scale-up-center">
          <div className="wedding__navbar-menu_container-links">
           <Menu />
           <div className="wedding__navbar-menu_container-links-sign">
        <p>SIGN IN</p>
        <button type="button">Sign Up</button>
        </div>
          </div>
          </div>
         )}
      </div>
    </div>
  );
};

export default Navbar
