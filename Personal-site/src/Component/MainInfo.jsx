import React from "react";
import Profilepic from "../assets/image/profile.jpg";
import pics from "../assets/image/豆包2.png";



export default function AboutMe() {
  return (
    <div className="container">
      <header>
      <nav className="navbar">
        <img src={pics} alt="navrPics" className="navlogo" />
        <ul>
          <li>
            <a href="#skills">My Skills</a>
          </li>
          <li>
            <a href="#projects">My Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
  
        </ul>
      </nav>
      </header>

  </div>
  );
}