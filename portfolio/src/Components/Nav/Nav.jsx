import React, { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {

  const [menuVisibility, setMenuVisibility] = useState(false);

  const changeMenuVisibility = (e) => {
    e.preventDefault();
    setMenuVisibility(!menuVisibility);
  };

  return (
    <div className="nav-container">

      <div className="desktop-nav">
        <Link className="nav-name" to="/">TYLER HUYSER</Link>

        <div className="menu-links">
          <a className="menu-link" href="#bio">BIO</a>
          <a className="menu-link" href="#projects">PROJECTS</a>
          <a className="menu-link" href="#resume">RESUME</a>
          <a className="menu-link" href="#contact">CONTACT</a>
        </div>
      </div>

      <div className="mobile-nav-container">
        <div className="mobile-nav">
          <Link className="nav-name" to="/">TYLER HUYSER</Link>

          <i className="fas fa-bars" onClick={(e) => changeMenuVisibility(e)}></i>
        </div>
      </div>

      <div className={menuVisibility ? "mobile-menu-links-visible" : "mobile-menu-links-hidden"}>
            <a className="menu-link" href="#bio">BIO</a>
            <a className="menu-link" href="#projects">PROJECTS</a>
            <a className="menu-link" href="#resume">RESUME</a>
            <a className="menu-link" href="#contact">CONTACT</a>
        </div>

     </div>
  )
}

export default Nav