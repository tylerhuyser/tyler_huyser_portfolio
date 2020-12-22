import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components"
import "./Skills.css";

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

// const SliderWrapper = styled.div`
//     .skill-icon {
//         img {
//             margin: 1.9em 0 0.4em 18%;
//             width: 64%;
//         }
//         p {
//             margin: 0 0 1.2em 0;
//             font-size: 0.9em;
//             text-align: center;
//         }
//     }
//     .BrainhubCarousel__arrows {
//         border: 3px solid ${ colors.teal };
//         border-radius: 50%;
//         background: rgba(0,0,0,0);
//         span {
//             border-color: ${ colors.teal };
//         }
//         &:hover {
//             background: ${ colors.teal };
//             span {
//                 border-color: ${ colors.white }
//             }
//         }
//     }
//     .BrainhubCarousel__trackContainer {
//         margin: 0 2.1em;
//         padding: 0 1.3em;
//         border-radius: 4px;
//         background: ${ colors.white };
//         background: url(https://res.cloudinary.com/dov1pamgz/image/upload/v1547316989/bg.jpg)
//         no-repeat center center fixed;
//         background-size: cover;
//         box-shadow: ${ elevation[0] };
//     }
// `

export default function Skills(props) {

  const [skillsDisplayed, setSkillsDisplayed] = useState(8)

  useEffect(() => {
      handleResize()
      window.addEventListener(`resize`, handleResize)
      return () => window.removeEventListener(`resize`, handleResize)
  })

  const handleResize = () => {
      const width = window.innerWidth
      if (width > 850) {
          setSkillsDisplayed(8)
      } else if (width > 640) {
          setSkillsDisplayed(6)
      } else if (width > 540) {
          setSkillsDisplayed(5)
      } else {
          setSkillsDisplayed(4)
      }
  }

  return (
    <div className="section skills-container" id="skills">

      <h1 className="skills-title">SKILLS</h1>

      <p className="skills-subtitle">A few technologies I work with...</p>


      {/* <SliderWrapper> */}
            <Carousel
                slidesPerPage={skillsDisplayed}
                arrows={skillsDisplayed > 4}
                autoPlay={2700}
                infinite
            >
                <div className="skill-icon">
                    <i class="devicon-nodejs-plain skill-icon"></i>
                    <p>Node JS</p>
                </div>
                <div className="skill-icon">
                    <i class="devicon-html5-plain skill-icon"></i>
                    <p>HTML5</p>
                </div>
                <div className="skill-icon">
                <i class="devicon-javascript-plain skill-icon"></i>
                    <p>Javascript</p>
                </div>
                <div className="skill-icon">
                <i class="devicon-react-original skill-icon"></i>
                    <p>ReactJS</p>
                </div>
                <div className="skill-icon">
                    <i class="devicon-redux-original skill-icon"></i>
                    <p>Redux</p>
                </div>
                <div className="skill-icon">
                    <i class="devicon-css3-plain skill-icon"></i>
                    <p>CSS3</p>
                </div>
                <div className="skill-icon">
                <i class="devicon-git-plain skill-icon"></i>
                    <p>Git</p>
                </div>
                <div className="skill-icon">
                    <i class="devicon-ruby-plain skill-icon"></i>
                    <p>Ruby</p>
                </div>
                <div className="skill-icon">
                <i class="devicon-rails-plain skill-icon"></i>
                    <p>Rails</p>
                </div>
                <div className="skill-icon">
                <i class="devicon-mongodb-plain skill-icon"></i>
                    <p>MongoDB</p>
                </div>
                <div className="skill-icon">
                <i class="devicon-express-original skill-icon"></i>
                    <p>Express</p>
                </div>
                <div className="skill-icon">
                <i class="devicon-postgresql-plain skill-icon"></i>
                    <p>PostgreSQL</p>
                </div>
                <div className="skill-icon">
                  <i class="devicon-heroku-original skill-icon"></i>
                    <p>Heroku</p>
                </div>
                <div className="skill-icon">
                  <i class="devicon-photoshop-plain skill-icon"></i>
                    <p>Photoshop</p>
                </div>
            </Carousel>
        {/* </SliderWrapper> */}


      {/* <div className="skills-carousel">

            <button className="prev" onClick={() => plusSlides(-1)}>
              {" "}
              &#10094;
            </button>

        <div className="skills-cards">{skillsCarousel}</div>

            <button className="next" onClick={() => plusSlides(1)}>
              {" "}
              &#10095;
            </button>
 
      </div> */}
    </div>
  );
}
