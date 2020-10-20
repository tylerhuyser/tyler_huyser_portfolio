import React from 'react';
import './Hero.css';

function Hero() {
  
  return (

    <div className="hero-container" id="hero">
      
      <div className="hero-copy">

        <div className="hero-title">
          <h1>Tyler Huyser</h1>
        </div>
      
        <div className="hero-subtitle">
          <p>| Full Stack Software Engineer |</p>
        </div>

        <a className="hero-call-to-action" href="#bio">
          <p>GET TO KNOW ME</p>
        </a>
        
      </div>

      <a className="hero-arrow" href="#bio">
        <i className="fas fa-chevron-down heartbeat"></i>
      </a>

    </div>

  )
}

export default Hero;