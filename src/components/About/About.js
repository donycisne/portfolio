import React from 'react';

import AboutResume from './AboutResume';
import Coding from '../Icons/Coding';
import Saxophone from '../Icons/Saxophone';
import Mask from '../Icons/Mask';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <AboutResume />
        <div className="about-content">
          <h1 className="about-title">About Dony</h1>
          <div className="about-description">
            <p>
              I'm a full stack developer from Perú living in Buenos Aires,
              Argentina. I'm always looking for an opportunity to code and learn
              new things.
            </p>
            <p>
              I am a native spanish speaker with an proficient english level.
            </p>
            <p>
              I study everyday to learn something new with programming. I like
              to code everything I imagine and I think it can make a social
              impact sometimes.
            </p>
            <p>
              I like watch movies about history and economics also I enjoy
              attending the events of the developer community and meeting people
              with different perspectives on things, diversity for me is the key
              to making things better.
            </p>
            <p>
              Music is an important part of my life, I play the sax and the
              traverse flute, I did some funny things when I was younger like
              trying to be an actor.
            </p>
          </div>
          <div className="about-icons" id="about-icons">
            <Coding />
            <Saxophone />
            <Mask />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
