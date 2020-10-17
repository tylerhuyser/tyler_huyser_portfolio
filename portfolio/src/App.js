import React, { useState } from 'react';

import Nav from './Components/Nav/Nav.jsx';
import Hero from './Components/Hero/Hero.jsx'
import Bio from './Components/Bio/Bio.jsx';
import Skills from './Components/Skills/Skills.jsx';

import './App.css';

function App() {

  const [popularUpperIndex, setPopularUpperIndex] = useState(4);
  const [popularLowerIndex, setPopularLowerIndex] = useState(0);


  return (
    <div className="App">
      <Nav />

      {/* <Route exact path="/" component={Hero} />
      <Route exact path="/bio" component={Bio} /> */}
      <Hero />
      <Bio />
      <Skills setPopularUpperIndex={setPopularUpperIndex} popularUpperIndex={popularUpperIndex} setPopularLowerIndex={setPopularLowerIndex} popularLowerIndex={popularLowerIndex} />

    </div>
  );
}

export default App;
