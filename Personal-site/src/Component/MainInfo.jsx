import React from "react";
import Profilepic from "../assets/image/profile2.jpg";
import navpics from "../assets/image/豆包2.png";
import jsLogo from "../assets/image/skillsLogo/js Logo.png";
import reactLogo from "../assets/image/skillsLogo/react.png"
import htmlLogo from "../assets/image/skillsLogo/html.png"
import githubLogo from "../assets/image/skillsLogo/githubIcons.png"
import javaLogo from "../assets/image/skillsLogo/java.png"
import project1 from "../assets/image/projectPreviewpic.jpg"
import linkedinLogo from "../assets/image//linkedin.png"

export default function AboutMe() {
  return (
    
    <div className="container">
      <header>
      <div className="navbar">
        <img src={navpics} alt="navrPics" className="navlogo" />
        <ul>
          <li>
            <a href="#skills">My Skills</a>
          </li>
          <li>
            <a href="#projects">My Projects</a>
          </li>
        </ul>
      </div>
        </header>
      <div className="profile-pics">
        <img src={Profilepic} alt="Profile Pics" className="profilepic" />
        <h1>
          Hi<span className="gradient-text">Jun Hong</span>  here!
        </h1>
        <p>
          I'm a software developer with a passion for creating innovative solutions and
          learning new technologies.<br></br>Welcome to my personal website where you can
          explore my skills, projects, and experiences.<br></br>Feel free to connect with me
          through the links provided. Let's build something amazing together!
        </p>
      </div>

      
       <div className="exampleSkills">
          <h3>Experience With</h3>
          <ul>
            <li><img src={jsLogo} className="skillsLogo"/></li>
            <li><img src={reactLogo} className="skillsLogo"/></li>
            <li><img src={htmlLogo} className="skillsLogo"/></li>
            <li><img src={githubLogo} className="skillsLogo"/></li>
            <li><img src={javaLogo} className="skillsLogo"/></li>
      </ul>
      </div>

      <div className="projectPreview">
        <h3>Projects</h3>
       <div class="project-cards">
    
          <div class="card">
            <img src={project1} alt="HTML Project" />
            <div class="card-content">
              <h3>Mock Shopping Website</h3>
              <a href="https://html-tutorial.com" target="_blank">
              Mock Shopping Website ↗
              </a>
            </div>
          </div>

          <div class="card">
            <img src={project1} alt="CSS Project" />
              <div class="card-content">
                <h3>Unlock CSS Magic</h3>
                <a href="https://css-tutorial.com" target="_blank">
                  Click Here to Visit <strong>CSS Tutorial</strong> ↗
                </a>
              </div>
          </div>
        </div>
      </div>

          <div className="job-Exp">
            <h3>Job Experiences</h3>
            <div className="job-list">
              <ul>
                <li>
                  <span className="jobIcons">&#x1F471;</span><strong> Part-Time Waiter</strong> at <strong>Restoran Pekin Sutera</strong> (2017 - 2019)
                  <ul>
                    <li>Provided excellent customer service in a fast-paced environment.</li>
                    <li>Managed orders and ensured timely delivery of food and beverages.</li>
                    <li>Maintained cleanliness and organization of the dining area.</li>
                  </ul>
                </li><br></br>
                <li>
                  <span className="jobIcons">&#x1F4BB;</span><strong> Sales Admin</strong> at <strong>NSL Technology Resources (s) Pte Ltd </strong> (2020 - 2021)
                  <ul>
                    <li>Resonpse to customer queries. </li>
                    <li>Documentaion products catalog</li>
                    <li>Management and Arrangement Of products delivery</li>
                  </ul>
                </li><br></br>
                <li>
                  <span className="jobIcons">&#x1F489;</span><strong>Part-Time Waiter</strong> at <strong>Parkway East Hospital, Singapore </strong> (2022 - 2025)
                  <ul>
                    <li>Provided excellent patient service. </li>
                    <li>Collaborate with partner</li>
                    <li>Check patient conditions and correct diet follow the diet remark by doctor</li>
                  </ul>
                </li><br></br>
              </ul>
            </div>
          </div>

        <div className="ContactFooter">
           <footer className="ContactFooter">
              <h3>Contact</h3>
              <p className="contact-description">
                I'm a passionate Software Developer with experience in building full-stack web applications.  
                Skilled in Java, JavaScript, React, Node.js, and database technologies.  
                Always eager to learn and create impactful solutions.
              </p>
              
              <p className="contact-email">
                📧 <a href="mailto:wongjh0602@gmail.com" target="blank">wongjh0602@gmail.com</a>
              </p>

              <div className="contact-icons">
                  <a href="https://github.com/wjunhong" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="GitHub" className="footer-icon" />
                  </a>
                <a href="www.linkedin.com/in/wongjunhong" target="_blank" rel="noopener noreferrer">
                <img src={linkedinLogo} alt="Linkedin" className="footer-icon" />
                </a>
              </div>
            </footer>
        </div>
    </div>
  );
}