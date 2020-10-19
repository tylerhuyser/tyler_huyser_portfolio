import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

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

        <div className="hero-call-to-action">
          <p>GET TO KNOW ME</p>
        </div>
        
      </div>

      <div className="hero-arrow">
          <i className="fas fa-angle-down"></i>
      </div>

    </div>

  )
}

export default Hero;