import React, { useState } from 'react';
import ReactFullpage from "@fullpage/react-fullpage";

import FullPageWrapper from './Components/FullPageWrapper/FullPageWrapper'
import Nav from './Components/Nav/Nav.jsx';
// import Hero from './Components/Hero/Hero.jsx'
// import Bio from './Components/Bio/Bio.jsx';
// import Skills from './Components/Skills/Skills.jsx';
// import Projects from './Components/Projects/Projects.jsx';
// import Resume from './Components/Resume/Resume.jsx';

import './App.css';

function App() {


  return (
    <div className="App">

      <Nav />

      <FullPageWrapper />

    </div>
  );
}

export default App;
