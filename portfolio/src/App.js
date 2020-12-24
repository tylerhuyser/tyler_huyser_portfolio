import React, { useState, useEffect } from "react";

import FullPage from "./components/FullPage/FullPage";
import Nav from "./components/Nav/Nav.jsx";
import SocialSidebar from "./components/SocialSidebar/SocialSidebar";

import "./App.css";

function App() {

  const isHome = window.location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (window.location.hash) {
      const id = window.location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }
  }, [isLoading]);

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  useEffect(() => {
    handleExternalLinks();
  }, []);


  return (
    <div className="App">
      <Nav />

      <FullPage />

      <SocialSidebar isHome={isHome} />
    </div>
  );
}

export default App;
