import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import NotFound from '../pages/NotFound';

const App = () => {
  return (
    <Router>
      <div className="portfolio">
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={300} classNames="fade">
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/portfolio" component={Portfolio} />
                  <Route component={NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    </Router>
  );
};

export default App;
