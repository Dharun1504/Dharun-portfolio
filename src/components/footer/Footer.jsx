import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Dharunraj Padmanathan</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/dharunraj-p" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Dharun1504" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/dharun10" target="_blank" rel="noreferrer" ><AiFillInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Dharunraj Padmanathan 2025. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer