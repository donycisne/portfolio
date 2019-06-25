import React from 'react';

import NavbarLogo from './NavbarLogo';
import NavbarStar from './NavbarStar';
import HomeNavMenu from './HomeNavMenu';

const HomeNavbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavbarLogo />
        <NavbarStar />
        <HomeNavMenu />
      </div>
    </nav>
  );
};

export default HomeNavbar;
