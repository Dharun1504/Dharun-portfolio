import "./intro.css";
import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/me.jpg';
import { motion } from 'framer-motion';

const Intro = () => {
  const fadeIn = (direction = 'up', duration = 0.3) => {
    return {
      hidden: {
        opacity: 0,
        y: direction === 'up' ? 20 : 0,
        x: direction === 'left' ? -20 : 0,
      },
      show: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration: duration,
        },
      },
    };
  };

  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <motion.div
          className="about__me"
          variants={fadeIn('left', 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="about__me-image">
            <img src={img} alt="Dharunraj Padamanathan" />
          </div>
        </motion.div>
        <motion.div
          className="about__content"
          variants={fadeIn('right', 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="about__cards">
            <motion.article
              className="about__card"
              variants={fadeIn('up', 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <FaAward className="about__icon" />
              <h5>Certifications</h5>
              <small>4+</small>
            </motion.article>
            <motion.article
              className="about__card"
              variants={fadeIn('up', 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>6+ Completed Projects</small>
            </motion.article>
          </div>
          <motion.p
            variants={fadeIn('up', 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            An enthusiastic and self-motivated Data Analyst and Full Stack Developer with hands-on experience in the MERN Stack (MongoDB, Express.js, React, Node.js). Proficient in React.js, Node.js, and Python, with a strong foundation in data analysis, data visualization, and web development. Although I'm in the early stages of my career, I have successfully worked on several projects, demonstrating my ability to create and maintain scalable web applications.

            I am committed to continuous learning, passionate about solving complex problems, and eager to apply my skills to real-world projects.
          </motion.p>
          <motion.a
            href="#contact"
            className="btn btn-primary"
            variants={fadeIn('up', 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
