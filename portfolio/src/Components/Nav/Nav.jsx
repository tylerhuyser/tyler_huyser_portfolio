import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <div className="nav-container">

        <Link className="nav-name" to="/">TYLER HUYSER</Link>

      <div className="menu-links">
        <a className="menu-link" href="#bio">BIO</a>
        <a className="menu-link" href="#projects">PROJECTS</a>
        <a className="menu-link" href="#resume">RESUME</a>
        <a className="menu-link" href="#contact">CONTACT</a>
      </div>

     </div>
  )
}

export default Nav