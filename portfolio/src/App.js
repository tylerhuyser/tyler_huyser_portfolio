import React, { useState } from 'react';

import Nav from './Components/Nav/Nav.jsx';
import Hero from './Components/Hero/Hero.jsx'
import Bio from './Components/Bio/Bio.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Projects from './Components/Projects/Projects.jsx';

import { Route } from 'react-router-dom'

import './App.css';

function App() {

  const [popularUpperIndex, setPopularUpperIndex] = useState(4);
  const [popularLowerIndex, setPopularLowerIndex] = useState(0);


  return (
    <div className="App">
      <Nav />

      {/* <Route exact path="/" component={Hero} > */}
        <Hero id="hero" />
      {/* </ Route>

      <Route exact path="/bio" component={Bio} > */}
        <Bio id="bio" />
      {/* </Route>  

      <Route path="/skills" component={Skills}> */}
        <Skills id="skills" setPopularUpperIndex={setPopularUpperIndex} popularUpperIndex={popularUpperIndex} setPopularLowerIndex={setPopularLowerIndex} popularLowerIndex={popularLowerIndex} />
      {/* </Route>   */}
    
        <Projects />


    </div>
  );
}

export default App;
