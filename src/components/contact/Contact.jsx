import './contact.css';
import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_8bvy7vg',
        'template_9k0bwil',
        formRef.current,
        '9M3OXQYZvv8s2lUAV'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  const fadeIn = (direction = 'left', duration = 0.3) => {
    return {
      hidden: {
        opacity: 0,
        y: direction === 'up' ? 20 : 0,
        x: direction === 'left' ? -100 : 0,
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
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <motion.div
          className="contact__options"
          variants={fadeIn('left', 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rajdharun2004@gmail.com</h5>
            <a href="mailto:rajdharun2004@gmail.com">Send a message</a>
          </article>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          variants={fadeIn('right', 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
