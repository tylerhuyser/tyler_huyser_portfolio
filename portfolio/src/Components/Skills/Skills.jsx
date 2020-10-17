import React, { useState, useEffect } from "react";
import "./Skills.css";
import parse from "react-dom/server";

function Skills(props) {
  const parse = require("html-react-parser");

  const [skillsCarousel, setSkillsCarousel] = useState([]);

  const { popularUpperIndex, setPopularUpperIndex } = props;
  const { popularLowerIndex, setPopularLowerIndex } = props;

  useEffect(() => {
    const getSkillsCarousel = () => {
      setSkillsCarousel(skillCards.slice(0, 5));
    };
    getSkillsCarousel();
  }, []);

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
      <div className="skill-card" id={skill.name}>
        {skillIcon}
        <p className="skill-name">{skill.name}</p>
      </div>
    );
  });

  function plusSlides(n) {
    let tempLowerIndex = popularLowerIndex;
    let tempUpperIndex = popularUpperIndex;

    if (n === -1 && tempLowerIndex === 0) {
      skillsCarousel.pop();
      setSkillsCarousel(skillsCarousel);

      tempLowerIndex = skillsCarousel.length - 1;
      tempUpperIndex -= 1;

      setPopularLowerIndex(tempLowerIndex);
      setPopularUpperIndex(tempUpperIndex);

      setSkillsCarousel((prevSkillsCarousel) => {
        return [skillCards[tempLowerIndex], ...prevSkillsCarousel];
      });
    } else if (n === -1 && tempUpperIndex === 0) {
      skillsCarousel.pop();
      setSkillsCarousel(skillsCarousel);

      tempLowerIndex -= 1;
      tempUpperIndex = skillsCarousel.length - 1;

      setPopularLowerIndex(tempLowerIndex);
      setPopularUpperIndex(tempUpperIndex);

      setSkillsCarousel((prevSkillsCarousel) => {
        return [skillCards[tempLowerIndex], ...prevSkillsCarousel];
      });
    } else if (n === -1 && tempLowerIndex !== 0) {
      skillsCarousel.pop();
      setSkillsCarousel(skillsCarousel);

      tempUpperIndex -= 1;
      tempLowerIndex -= 1;

      setPopularLowerIndex(tempLowerIndex);
      setPopularUpperIndex(tempUpperIndex);

      setSkillsCarousel((prevSkillsCarousel) => {
        return [skillCards[tempLowerIndex], ...prevSkillsCarousel];
      });
    } else if (n === 1 && tempUpperIndex === skillsCarousel.length - 1) {
      skillsCarousel.shift();
      setSkillsCarousel(skillsCarousel);

      tempUpperIndex = 0;
      tempLowerIndex += 1;

      setPopularLowerIndex(tempLowerIndex);
      setPopularUpperIndex(tempUpperIndex);

      setSkillsCarousel((prevSkillsCarousel) => {
        return [...prevSkillsCarousel, skillCards[tempUpperIndex]];
      });
    } else if (n === 1 && tempLowerIndex === skillsCarousel.length - 1) {
      skillsCarousel.shift();
      setSkillsCarousel(skillsCarousel);

      tempUpperIndex += 1;
      tempLowerIndex = 0;

      setPopularLowerIndex(tempLowerIndex);
      setPopularUpperIndex(tempUpperIndex);

      setSkillsCarousel((prevSkillsCarousel) => {
        return [...prevSkillsCarousel, skillCards[tempUpperIndex]];
      });
    } else if (n === 1 && tempUpperIndex !== skillsCarousel.length - 1) {
      skillsCarousel.shift();
      setSkillsCarousel(skillsCarousel);

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
    <div className="skills-container">

      <h1 className="skills-title">SKILLS</h1>

      <p className="skills-subtitle">These are a few of the technologies I work with:</p>

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