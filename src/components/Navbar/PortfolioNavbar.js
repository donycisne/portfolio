import React from 'react';

import NavbarLogo from './NavbarLogo';
import NavbarStar from './NavbarStar';
import PortfolioNavMenu from './PortfolioNavMenu';

const PortfolioNavbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavbarLogo />
        <NavbarStar />
        <PortfolioNavMenu />
      </div>
    </nav>
  );
};

export default PortfolioNavbar;
