import React from 'react'
import './Projects.css'

function Projects() {
  

  
  return (
    <div className="projects-container">

      <p className="projects-title">PORTFOLIO</p>

      <p className="projects-subtitle">Just a sample of my work...</p>

      <div className="projects-grid">


        <a className="project-container" id="fungus-app" target="_blank" rel="noreferrer noopener" href="https://github.com/tylerhuyser/CanYouEatItFungusIdentificationApp" >

          <img className="project-image" alt="fungus-app" src="https://github.com/tylerhuyser/CanYouEatItFungusIdentificationApp/blob/master/ReadME_Images/Wireframe_Images/Desktop_Landing_Page.png?raw=true"  style={{

            objectPosition: "50% 45%",

            }} />

          <div className="project-copy" >
          
            <p className="project-title">CAN YOU EAT IT</p>

            <p className="project-description">CAN YOU EAT IT? is able to help these amateur foraging hobbyists find more information about their discoveries by connecting user-input location, season, and observation information with API data.</p>

          </div>
            
        </a>


        <div className="project-container" id="profesh" target="_blank" rel="noreferrer noopener" href="https://github.com/tylerhuyser/profesh" >

          <img className="project-image" alt="profesh" src="https://i.imgur.com/8wixFCM.png" style={{

            objectPosition: "50% 35%",
            
          }} />

          <div className="project-copy" >

            <p className="project-title">PROFESH</p>

            <p className="project-description">Profesh is an app that assists job seekers throughout their job hunt. The app provides a directory of job listings that users can refine through various search parameters, such as location, title, experience, and company. More importantly, the app provides a system of tools, that enable the user to track the individual journey with each opportunity.</p>
            
          </div>

        </div>


        <div className="project-container" id="twinkle-toes" target="_blank" rel="noreferrer noopener" href="https://github.com/tylerhuyser/twinkle-toes" >

          <img className="project-image" alt="twinkle-toes" src="https://i.imgur.com/lNWonIE.png" />
          
          <div className="project-copy" >
          
            <p className="project-title">TWINKLES TOES</p>

            <p className="project-description">Twinkle Toes is a e-commerce store that allows users to shop for their favorite pair of sparkly shoes. The app also contains admin features that give store-owners full CRUD capabilities.</p>

          </div>
            
        </div>

        <div className="project-container" id="TBD" target="_blank" rel="noreferrer noopener" href="" >

        <img className="project-image" alt="awoken" src="https://camo.githubusercontent.com/833cca71cd237398e370c4c862952145b942502a63a9198c8269b8f4d4b870a2/68747470733a2f2f692e696d6775722e636f6d2f4b56624b787a412e6a7067" />

          <div className="project-copy" >
          
            <p className="project-title">TBD</p>

            <p className="project-description"></p>

          </div>
            
        </div>


      </div>

    </div>
  )
}

export default Projects;