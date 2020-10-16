import React from 'react';
import Nav from './Components/Nav/Nav.jsx';
import Hero from './Components/Hero/Hero.jsx'
import Bio from './Components/Bio/Bio.jsx';
import Skills from './Components/Skills/Skills.jsx';
import { Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />

      {/* <Route exact path="/" component={Hero} />
      <Route exact path="/bio" component={Bio} /> */}
      <Hero />
      <Bio />
      <Skills />

    </div>
  );
}

export default App;
