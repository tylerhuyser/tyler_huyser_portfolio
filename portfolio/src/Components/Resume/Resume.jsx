import React from "react";
import "./Resume.css";

function Resume() {
  


  return (
    <div className="section resume-container" id="resume">

      <p className="resume-title">RESUME</p>
      <p className="resume-subtitle">Just some of my credentials</p>

      <div className="resume-timeline">

        <p className="work-experience-title">WORK EXPERIENCE</p>
        
        <div className="work-experience-container">
          
          <div className="work-experience-card">

            <div className="job-overview-information">
              
              <p className="job-title" id="influencer-marketing">Influencer Marketing Specialist</p>

              <p className="employment-dates">Nov. 2017 - July 2020</p>
              
            </div>
            
            <div className="job-description-info">
              
              <p className="employer-name">Employers: VaynerMedia, Gallery Media Group, PureWow, Goalie</p>
              <ul className="role-description">
                <li> Oversaw the implementation of brand campaigns from contracting through measurement</li>
                <li>Built budgets, timelines, and campaign concepts for RFPs & sold programs</li>
                <li>Managed communication with the brand/client & influencer talent for active campaigns</li>
                <li>Analyzed data to identify influencers that would meet the client’s needs using a suite of propriety analytics platforms </li>
                <li>Prepared wrap-reports by translating post-performance into insights that could inform future collaborations</li>
                <li> Assembled and managed GMG's hand-picked, one-to-one influencer network of young entrepreneurs known as "The Roster"</li>
              </ul>
              
            </div>


          </div>

        </div>

        <p className="education-title">EDUCATION</p>

        <div className="education-container">
          

        </div>

        <p className="entrepreneurship-title">ENTREPRENEURSHIP</p>

      </div>

      <a className="resume-download-link" target="_blank" rel="noreferrer noopener" href="https://drive.google.com/file/d/119a9_4ptdEDmtNPvgr2i9BOEmsyisst1/view?usp=sharing">
        <button>RESUME</button>
      </a>

    </div>
  );
}

export default Resume;