import React from 'react';
import './Bio.css';
import { Link } from 'react-router-dom';

function Bio() { 


  return (
    <div className="bio-container" id="bio">

      <div className="bio-contents">

        <img className="bio-image" src="https://format-com-cld-res.cloudinary.com/image/private/s--0CiPe72Y--/c_crop,h_1360,w_1360,x_0,y_0/c_fill,g_center,h_380,w_380/dpr_2,fl_keep_iptc.progressive,q_95/v1/8bc70e43e0e537d659d8f794a2200d22/Headshot_Tyler_Huyser.jpg" />

        <div className="bio">

          <h2 className="bio-title">You're probably wondering...</h2>
          <h2 className="bio-subtitle">WHO AM I?</h2>
          <p className="bio-copy">A pragmatist that owns not one ~but two~ salt lamps.


          I consider myself to be a Wii tennis professional and former editor-in-chief of Cascada’s Wikipedia page.

          I’m mildly afraid of big dogs and I believe that aliens do exist-or at least that, if they did, it’d be cool.

          I’m an aspiring screenwriter, working (slowly) on a masterpiece.
          </p>

        </div>
      
      </div>

    </div>
  )
};

export default Bio;
