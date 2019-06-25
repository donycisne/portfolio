import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import HeroLinks from './HeroLinks';

smoothscroll.polyfill();

const Hero = () => {
  const handleClick = e => {
    e.preventDefault();
    document
      .getElementById(e.currentTarget.hash.slice(1))
      .scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-background" />
      <div className="hero-container">
        <h1 className="hero-name">Dony Cisneros</h1>
        <h2 className="hero-role">Full Stack Developer</h2>
        <p className="hero-info">
          I'm a software developer focused on solving problems using
          technologies for web development.
        </p>
        <HeroLinks />
        <div className="hero-button">
          <a
            href="#projects"
            className="hero-button-show"
            onClick={handleClick}
          >
            <span>Show me the code</span>
          </a>
          <a
            href="#about"
            className="hero-scroll"
            aria-label="Arrow animation to show the scroll."
            onClick={handleClick}
          >
            <span className="hero-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
