import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import './experience.css';

const Experience = () => {
  const fadeIn = (direction = 'left', duration = 0.3) => {
    return {
      hidden: {
        opacity: 0,
        y: direction === 'up' ? 20 : 0,
        x: direction === 'left' ? -70 : 0,
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
    <section id="experience">
      <h2>Skills</h2>
      <div className="container experience__container">
        <motion.div
          className="experience__frontend"
          variants={fadeIn('left', 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="experience__content">
            <motion.article
              className="experience__details"
              variants={fadeIn('up', 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>HTML / CSS</h4>
            </motion.article>
            <motion.article
              className="experience__details"
              variants={fadeIn('up', 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>JavaScript</h4>
            </motion.article>
            <motion.article
              className="experience__details"
              variants={fadeIn('up', 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>MongoDB, MySQL, PostgreSQL</h4>
            </motion.article>
            <motion.article
              className="experience__details"
              variants={fadeIn('up', 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Python, Java</h4>
            </motion.article>
            <motion.article
              className="experience__details"
              variants={fadeIn('up', 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>React</h4>
            </motion.article>
            <motion.article
              className="experience__details"
              variants={fadeIn('up', 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Springboot, Typescript</h4>
            </motion.article>
            <motion.article
              className="experience__details"
              variants={fadeIn('up', 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Machine Learning, Deep Learning</h4>
            </motion.article>
            <motion.article
              className="experience__details"
              variants={fadeIn('up', 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Node.js, Express.js</h4>
            </motion.article>
            <motion.article
              className="experience__details"
              variants={fadeIn('up', 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Natural Language Processing</h4>
            </motion.article>
            <motion.article
              className="experience__details"
              variants={fadeIn('up', 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>C, C++</h4>
            </motion.article>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
