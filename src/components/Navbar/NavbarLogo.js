import React from 'react';

import Logo from '../Icons/Logo';

const NavbarLogo = () => {
  return (
    <div className="nav-logo-container">
      <a href="/" title="Home" className="nav-logo-link" id="logo">
        <Logo />
      </a>
    </div>
  );
};

export default NavbarLogo;
