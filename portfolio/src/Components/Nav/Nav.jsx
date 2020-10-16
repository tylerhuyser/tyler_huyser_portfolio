import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <div className="nav-container">

        <Link className="nav-name" to="/">TYLER HUYSER</Link>

      <div className="menu-links">
        <Link className="menu-link" to="/bio">BIO</Link>
        <Link className="menu-link" to="/projects">PROJECTS</Link>
        <Link className="menu-link" to="/resume">RESUME</Link>
        <Link className="menu-link" to="/contact">CONTACT</Link>
      </div>

     </div>
  )
}

export default Nav