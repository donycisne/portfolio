import React, { useEffect } from 'react';

import PortfolioNavbar from '../components/Navbar/PortfolioNavbar';
import Footer from '../components/Footer/Footer';
import Card from '../components/Projects/Card';
import portfolio from '../data/portfolio.json';

const Portfolio = () => {
  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  });

  const projects = portfolio.data.projects;

  const cards = projects.map(p => (
    <Card
      key={p.id}
      title={p.title}
      description={p.description}
      img={p.img}
      demoURL={p.demoURL}
      githubURL={p.githubURL}
    />
  ));

  return (
    <div className="port-page">
      <PortfolioNavbar />
      <div className="portfolio-page">
        <div className="projects-background" />
        <div className="projects-container">
          <div className="projects-section">
            <h1 className="projects-title">Portfolio</h1>
            <div className="projects-list">{cards}</div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
