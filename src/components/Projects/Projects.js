import React from 'react';
import { Link } from 'react-router-dom';

import portfolio from '../../data/portfolio.json';
import Card from './Card';

const Projects = () => {
  const projects = portfolio.data.projects;

  const cards = projects
    .map(p => (
      <Card
        key={p.id}
        title={p.title}
        description={p.description}
        img={p.img}
        demoURL={p.demoURL}
        githubURL={p.githubURL}
      />
    ))
    .slice(0, 3);

  return (
    <section className="projects" id="projects">
      <div className="projects-background" />
      <div className="projects-container">
        <div className="projects-section">
          <h1 className="projects-title">Portfolio</h1>
          <div className="projects-list">{cards}</div>
          <div className="projects-button">
            <Link to="/portfolio" className="show-more">
              Show me more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
