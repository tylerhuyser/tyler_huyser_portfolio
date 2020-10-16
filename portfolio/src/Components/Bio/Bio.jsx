import React from 'react';
import './Bio.css';
import { Link } from 'react-router-dom';

function Bio() { 


  return (
    <div className="bio-container" id="#bio">
      <div className="brief-bio-container">
        <h2 className="bio-title">ABOUT ME</h2>
        <h2 className="bio-subtitle">Allow Me To Introduce Myself.</h2>
        
        <div className="brief-bio-info">
          <img className="bio-image" src="https://format-com-cld-res.cloudinary.com/image/private/s--0CiPe72Y--/c_crop,h_1360,w_1360,x_0,y_0/c_fill,g_center,h_380,w_380/dpr_2,fl_keep_iptc.progressive,q_95/v1/8bc70e43e0e537d659d8f794a2200d22/Headshot_Tyler_Huyser.jpg" />
          <p className="bio-copy">I'm a Columbia University gradiate who is excited to begin a career as a Software Engineer. Previously coming from the world of marketing, I am eager to leverage my experience in operations to lead blah blah to new heights. </p>
        </div>

        <div className="backstory-container">
          <h6 className="backstory-title">BACKSTORY</h6>
          <p className="backstory-copy"></p>
        </div>

      </div>
    </div>
  )
};

export default Bio;
