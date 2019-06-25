import React, { useState, useRef } from 'react';

const PortfolioNavMenu = () => {
  const [showNav, setShowNav] = useState(false);
  const refCheck = useRef();

  const showNavList = () => {
    setShowNav(!showNav);
  };

  const checkMenu = e => {
    refCheck.current.checked = !refCheck.current.checked;
    showNavList();
  };

  return (
    <React.Fragment>
      <div className="nav-menu">
        <ul className="list">
          <li className="item">
            <a href="/#about" className="link">
              <span className="link-text">About</span>
            </a>
          </li>
          <li className="item">
            <a href="/#projects" className="link">
              <span className="link-text">Portfolio</span>
            </a>
          </li>
          <li className="item">
            <a href="/#contact" className="link">
              <span className="link-text">Contact</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="nav-menu-toggle">
        <input
          type="checkbox"
          className="nav-checkbox"
          id="nav-toggle"
          onClick={showNavList}
          ref={refCheck}
        />
        <label htmlFor="nav-toggle" className="nav-button">
          <span className="nav-icon" />
        </label>
      </div>
      {showNav ? (
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-link" href="/#about" onClick={checkMenu}>
              <span className="nav-link-text">About</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#projects" onClick={checkMenu}>
              <span className="nav-link-text">Portfolio</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#contact" onClick={checkMenu}>
              <span className="nav-link-text">Contact</span>
            </a>
          </li>
        </ul>
      ) : null}
    </React.Fragment>
  );
};

export default PortfolioNavMenu;
