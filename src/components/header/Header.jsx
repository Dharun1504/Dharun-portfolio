import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h1>Hello I'm</h1>
        <h1>Dharunraj Padmanathan</h1>
        <h2 className="text-light">Software Developer</h2>
        <CTA />
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
