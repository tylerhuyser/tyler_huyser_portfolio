import React, { useState, useEffect, useRef } from "react";
import "./Skills.css";

function Skills(props) {
  const parse = require("html-react-parser");

  const [skillsCarousel, setSkillsCarousel] = useState([]);
  const [animationType, setAnimationType] = useState("skill-card slide-in-right")

  const { popularUpperIndex, setPopularUpperIndex } = props;
  const { popularLowerIndex, setPopularLowerIndex } = props;

  // useEffect(() => {
  //   classTimeout.current = setTimeout(() => setAnimationType("skill-card"), 999);
  //   return () => {
  //     clearTimeout(classTimeout.current)
  //   };
  // }, [animationType])


  const skills = [
    { name: "ReactJS", icon: '<i class="devicon-react-original skill-icon"></i>' },
    {
      name: "JavaScript",
      icon: '<i class="devicon-javascript-plain skill-icon"></i>',
    },
    { name: "CSS3", icon: '<i class="devicon-css3-plain skill-icon"></i>' },
    { name: "Git", icon: '<i class="devicon-git-plain skill-icon"></i>' },
    { name: "MongoDB", icon: '<i class="devicon-mongodb-plain skill-icon"></i>' },
    { name: "Ruby", icon: '<i class="devicon-ruby-plain skill-icon"></i>' },
    { name: "Rails", icon: '<i class="devicon-rails-plain skill-icon"></i>' },
    { name: "Node JS", icon: '<i class="devicon-nodejs-plain skill-icon"></i>' },
    { name: "HTML5", icon: '<i class="devicon-html5-plain skill-icon"></i>' },
    { name: "Heroku", icon: '<i class="devicon-heroku-original skill-icon"></i>' },
    {
      name: "Postgresql",
      icon: '<i class="devicon-postgresql-plain skill-icon"></i>',
    },
    {
      name: "Photoshop",
      icon: '<i class="devicon-photoshop-plain skill-icon"></i>',
    },
  ];

  const skillCards = skills.map((skill, idx) => {
    const skillIcon = parse(skill.icon, { htmlparser2: { lowerCaseTags: false } });

    return (
      <div className={animationType} id={skill.name} key={skill.name}>
        {skillIcon}
        <p className="skill-name">{skill.name}</p>
      </div>
    );
  });

  useEffect(() => {
    const getSkillsCarousel = () => {
      setSkillsCarousel(skillCards.slice(0, 5));
    };
    getSkillsCarousel();
  }, []);

  const carouselTimeout = useRef(null)
  const classTimeout = useRef(null)


  useEffect(() => {
    carouselTimeout.current = setTimeout(() => plusSlides(1), 2000);
    return () => {
      clearTimeout(carouselTimeout.current);
    };
  })

  function plusSlides(n) {
    let tempLowerIndex = popularLowerIndex;
    let tempUpperIndex = popularUpperIndex;

    if (n === -1 && tempLowerIndex === 0) {
      clearTimeout(carouselTimeout.current)
      
      skillsCarousel.pop();
      setSkillsCarousel(skillsCarousel);

      setAnimationType('skill-card slide-in-left')

      tempLowerIndex = skillCards.length - 1;
      tempUpperIndex -= 1;

      setPopularLowerIndex(tempLowerIndex);
      setPopularUpperIndex(tempUpperIndex);

      setSkillsCarousel((prevSkillsCarousel) => {
        return [skillCards[tempLowerIndex], ...prevSkillsCarousel];
      });
    } else if (n === -1 && tempUpperIndex === 0) {
      clearTimeout(carouselTimeout.current)

      skillsCarousel.pop();
      setSkillsCarousel(skillsCarousel);

      setAnimationType('skill-card slide-in-left')

      tempLowerIndex -= 1;
      tempUpperIndex = skillCards.length - 1;

      setPopularLowerIndex(tempLowerIndex);
      setPopularUpperIndex(tempUpperIndex);

      setSkillsCarousel((prevSkillsCarousel) => {
        return [skillCards[tempLowerIndex], ...prevSkillsCarousel];
      });
    } else if (n === -1 && tempLowerIndex !== 0) {
      clearTimeout(carouselTimeout.current)

      skillsCarousel.pop();
      setSkillsCarousel(skillsCarousel);

      setAnimationType('skill-card slide-in-left')

      tempUpperIndex -= 1;
      tempLowerIndex -= 1;

      setPopularLowerIndex(tempLowerIndex);
      setPopularUpperIndex(tempUpperIndex);

      setSkillsCarousel((prevSkillsCarousel) => {
        return [skillCards[tempLowerIndex], ...prevSkillsCarousel];
      });
    } else if (n === 1 && tempUpperIndex === skillCards.length - 1) {
      clearTimeout(carouselTimeout.current)

      skillsCarousel.shift();
      setSkillsCarousel(skillsCarousel);

      setAnimationType('skill-card slide-in-right')

      tempUpperIndex = 0;
      tempLowerIndex += 1;

      setPopularLowerIndex(tempLowerIndex);
      setPopularUpperIndex(tempUpperIndex);

      setSkillsCarousel((prevSkillsCarousel) => {
        return [...prevSkillsCarousel, skillCards[tempUpperIndex]];
      });
    } else if (n === 1 && tempLowerIndex === skillCards.length - 1) {
      clearTimeout(carouselTimeout.current)

      skillsCarousel.shift();
      setSkillsCarousel(skillsCarousel);

      setAnimationType('skill-card slide-in-right')

      tempUpperIndex += 1;
      tempLowerIndex = 0;

      setPopularLowerIndex(tempLowerIndex);
      setPopularUpperIndex(tempUpperIndex);

      setSkillsCarousel((prevSkillsCarousel) => {
        return [...prevSkillsCarousel, skillCards[tempUpperIndex]];
      });
    } else if (n === 1 && tempUpperIndex !== skillCards.length - 1) {
      clearTimeout(carouselTimeout.current)

      skillsCarousel.shift();
      setSkillsCarousel(skillsCarousel);

      setAnimationType('skill-card slide-in-right')

      tempUpperIndex += 1;
      tempLowerIndex += 1;

      setPopularLowerIndex(tempLowerIndex);
      setPopularUpperIndex(tempUpperIndex);

      setSkillsCarousel((prevSkillsCarousel) => {
        return [...prevSkillsCarousel, skillCards[tempUpperIndex]];
      });
    }
  }

//   const handleResize = () => {
//     const width = window.innerWidth
//     if (width > 850) {
//         setSkillsDisplayed(8)
//     } else if (width > 640) {
//         setSkillsDisplayed(6)
//     } else if (width > 540) {
//         setSkillsDisplayed(5)
//     } else {
//         setSkillsDisplayed(4)
//     }
// }
  
  // From: https://github.com/LucasLombardo/portfolio-blog/blob/master/src/components/home/skillSlider.js

  return (
    <div className="skills-container" id="skills">

      <h1 className="skills-title">SKILLS</h1>

      <p className="skills-subtitle">A few technologies I work with...</p>

      <div className="skills-carousel">

            <button className="prev" onClick={() => plusSlides(-1)}>
              {" "}
              &#10094;
            </button>

        <div className="skills-cards">{skillsCarousel}</div>

            <button className="next" onClick={() => plusSlides(1)}>
              {" "}
              &#10095;
            </button>
 
      </div>
    </div>
  );
}

export default Skills;
