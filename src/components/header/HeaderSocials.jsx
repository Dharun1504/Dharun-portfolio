import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/dharunraj-p" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Dharun1504" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/_.dharun._10?igsh=MWJydHE3NTExa2QzeA==" target="_blank" rel="noreferrer" ><AiFillInstagram /></a>
    </div>
  )
}

export default HeaderSocials
