import React, { useState } from 'react'
import ReactFullpage from "@fullpage/react-fullpage";

import Hero from '../Hero/Hero.jsx';
import Bio from '../Bio/Bio.jsx'
import Skills from '../Skills/Skills.jsx';
import Projects from '../Projects/Projects.jsx';
import Resume from '../Resume/Resume.jsx';


export default function FullPageWrapper() {

  const [popularUpperIndex, setPopularUpperIndex] = useState(4);
  const [popularLowerIndex, setPopularLowerIndex] = useState(0);

  const anchors = ["firstPage", "secondPage", "thirdPage"];
  
  return (
    <ReactFullpage
      licenseKey = {'YOUR_KEY_HERE'}
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
      onLeave={(origin, destination, direction) => {
        console.log("onLeave event", { origin, destination, direction });
      }}
      render={({ state, fullpageApi }) => {
        console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console
      
        return (
        
        <div>

          {/* <Route exact path="/" component={Hero} > */ }
          < Hero id = "hero" />
          {/* </ Route>
        
              <Route exact path="/bio" component={Bio} > */}
            < Bio id = "bio" />
            {/* </Route>  
        
              <Route path="/skills" component={Skills}> */}
              < Skills id = "skills" setPopularUpperIndex = { setPopularUpperIndex } popularUpperIndex = { popularUpperIndex } setPopularLowerIndex = { setPopularLowerIndex } popularLowerIndex = { popularLowerIndex } />
                {/* </Route>   */ }
            
                < Projects />
        
                <Resume />
        </div>
        )
      }}/>
  )
}

  



