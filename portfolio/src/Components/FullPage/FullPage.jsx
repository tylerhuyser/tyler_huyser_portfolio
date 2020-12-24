import React, { useState } from 'react'
import ReactFullpage from "@fullpage/react-fullpage";

import Hero from '../Hero/Hero.jsx';
import Bio from '../Bio/Bio.jsx'
import Skills from '../Skills/Skills.jsx';
import Projects from '../Projects/Projects.jsx';
import Resume from '../Resume/Resume.jsx';

import './FullPage.css'

export default function FullPage() {

  const anchors = ["Home", "Bio", "Skills", "Projects", "Resume"];

  const FullPageWrapper = () => (

    <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    css3="false"
    // sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

    return (
    
      <div>
          
        < Hero className="section" id = "hero" />

        < Bio className="section" id = "bio" />
      
        < Skills className="section" id = "skills" />
          
        < Projects className="section" id="projects"  />
      
          <Resume className="section" id="resume" />

      </div>
      )
    }}/>
  
  )
    
  const fullPage = FullPageWrapper()
    
  return (
  <>
      {fullPage}
  </>
  )
}

  



