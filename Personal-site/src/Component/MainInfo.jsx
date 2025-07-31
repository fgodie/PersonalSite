import React from "react";
import Profilepic from "../assets/image/profile.jpg";
import pics from "../assets/image/豆包2.png";
import sideNavbar from "./sidenavbar";

export default function AboutMe() {
  return (

    <div className="container">
        <sideNavbar/>
      <header className="profile-header ">
        <img src={Profilepic} alt="Profile" id="profile-pic" />
         <div className="profile-info">
    <div className="info-text">
      <h1>
        Wong Jun Hong
        <img src={pics} alt="Profile Icon" className="NamePics" />
      </h1>
      <p className="subtitle">
        Singapore Polytechnic Student | Aspiring Software Web Developer
      </p>
    </div>

    <section className="about-section">
      <h2><span>💬</span> About Me</h2>
      <p>
        I'm an Information Technology student at Singapore Polytechnic,
        specializing in Software and Application Development. I enjoy
        programming and building full-stack web applications. Skilled in
        Java, JavaScript, React, Node.js, and database management, I'm
        passionate about learning new technologies and delivering impactful
        solutions.
      </p>
    </section>
  </div>
</header>

      <div className="sections-grid">

        {/* Skills */}
        <section>
          <h2>
            <span>🛠</span>Skills
          </h2>
          <ul className="skills-list">
            <li>Java</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>HTML5 &amp; CSS3</li>
            <li>PostgreSQL &amp; MySQL</li>
          </ul>
        </section>

        {/* Education */}
        <section>
          <h2>
            <span>🎓</span>Education
          </h2>
          <div className="education-info">
            <p className="school">Singapore Polytechnic</p>
            <p>Diploma in IT (Software & Application Dev.)</p>
            <p className="small">Expected Graduation: 2026</p>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2>
            <span>📬</span>Contact
          </h2>
          <ul className="contact-list">
            <li>
              <span>📧</span>wjunhong@example.com
            </li>
            <li>
              <span>🐙</span>github.com/wjunhong
            </li>
            <li>
              <span>🔗</span>linkedin.com/in/wjunhong
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
