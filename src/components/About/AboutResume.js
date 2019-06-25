import React from 'react';

import portfolio from '../../data/portfolio.json';
import Download from '../Icons/Download';

const AboutResume = () => {
  const env = process.env.PUBLIC_URL;
  const { img, pdf } = portfolio.data.resume;

  const aboutImg = `${env}/${img}`;
  const aboutPdf = `${env}/${pdf}`;

  return (
    <div className="about-resume">
      <a href={aboutPdf} target="_blank" rel="noopener noreferrer">
        <img className="resume-img" src={aboutImg} alt="Dony Cisneros Resume" />
      </a>
      <div className="resume-button">
        <a
          className="resume-download"
          href={aboutPdf}
          id="download"
          download="dony_cisneros_resume"
        >
          <Download />
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  );
};

export default AboutResume;
