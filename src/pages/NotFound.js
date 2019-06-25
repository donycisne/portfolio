import React from 'react';

import NotFoundNavbar from '../components/Navbar/NotFoundNavbar';
import Footer from '../components/Footer/Footer';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <NotFoundNavbar />
      <div className="not-found">
        <div className="not-found-background" />
        <h1>404 - Not Found</h1>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
