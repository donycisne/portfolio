import React from 'react';

import SocialLinks from '../Icons/SocialLinks';
import Star from '../Icons/Star';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-copyright">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Dony Cisneros. All rights
            reserved.
          </p>
        </div>
        <div className="footer-star" id="star-footer">
          <Star />
        </div>
        <div className="footer-links" id="footer-links">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
