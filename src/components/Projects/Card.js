import React from 'react';

import ExternalLink from '../Icons/ExternalLink';
import SourceCode from '../Icons/SourceCode';

const Card = ({ title, description, img, demoURL, githubURL }) => {
  return (
    <article className="card">
      <div className="card-photo">
        <div className="card-photo-background">
          <a
            href={demoURL}
            target="_blank"
            rel="noopener noreferrer"
            className="card-img-container"
          >
            <img
              src={img.small}
              alt="Invitations"
              className="card-img"
              width="322px"
              height="192px"
              // srcSet={(`${img.small} 100w`, `${img.normal} 400w`)}
            />
          </a>
        </div>
      </div>
      <div className="card-description">
        <h3 className="card-title">{title}</h3>
        <p className="card-content">{description}</p>
        <div className="card-links">
          <a
            href={githubURL}
            className="card-link"
            target="_blank"
            id="source-code-link"
            rel="noopener noreferrer"
          >
            <span>GitHub</span>
            <SourceCode />
          </a>
          <a
            href={demoURL}
            className="card-link"
            target="_blank"
            id="demo-link"
            rel="noopener noreferrer"
          >
            <span>Demo</span>
            <ExternalLink />
          </a>
        </div>
      </div>
    </article>
  );
};

export default Card;
