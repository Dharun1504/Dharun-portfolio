import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/me.jpg'

// import ME from '../../assets/Rasif Tagizade image.jpg';


const Intro = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Dharunraj Padamanathan" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Certifications</h5>
              <small>4+</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>6+ Completed Projects</small>
            </article>
          </div>
          <p>
            An enthusiastic and self-motivated Data Analyst and Full Stack Developer with hands-on experience in the MERN Stack (MongoDB, Express.js, React, Node.js). Proficient in React.js, Node.js, and Python, with a strong foundation in data analysis, data visualization, and web development. Although I'm in the early stages of my career, I have successfully worked on several projects, demonstrating my ability to create and maintain scalable web applications.

I am committed to continuous learning, passionate about solving complex problems, and eager to apply my skills to real-world projects. </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
