import React from "react";
import "./App.css";
import Profilepic from "./assets/image/profile.jpg";

export default function AboutMe() {
  return (
    <div className="container">
      <header className="profile-header">
        <img
          src={Profilepic}
          alt="Profile"
          id="profile-pic"
        />
        <div className="profile-info">
          <h1>Wong Jun Hong</h1>
          <p className="subtitle">IT Student | Software Developer</p>
        </div>
      </header>

      <div className="sections-grid">
        {/* About Me */}
        <section>
          <h2>
            <span>💬</span>About Me
          </h2>
          <p>
            I'm an Information Technology student at Singapore Polytechnic,
            specializing in Software and Application Development. I enjoy
            programming and building full-stack web applications. Skilled in
            Java, JavaScript, React, Node.js, and database management, I'm
            passionate about learning new technologies and delivering impactful
            solutions.
          </p>
        </section>

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
