import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import menu from "../../assets/images/icon-hamburger.svg";
import close from "../../assets/images/icon-close.svg";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(prev => !prev)
  }
  
  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul className="desktop_menu">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
      </ul>
      {!showMenu ? (
        <div onClick={handleShowMenu}><img className="hamburger" src={menu} alt="" /></div>
        
      ) : (
        <div onClick={handleShowMenu}><img className="hamburger" src={close} alt="" /></div>
      )}

      <button className="nav_button">Request Invite</button>
      {showMenu && <ul className="mobile_menu">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
      </ul>}
    </nav>
  );
};

export default Navbar;
