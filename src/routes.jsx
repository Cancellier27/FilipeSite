/* eslint-disable linebreak-style */
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Main from './components/main/main';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';

const Routes = () => (
  <BrowserRouter>
    <Switch>

      <Route component={Main} path="/" exact />
      <Route component={About} path="/about" />
      <Route component={Projects} path="/projects" />
      <Route component={Contact} path="/contact" />
      <Route component={() => <h2>Page not found: error 404</h2>} />

    </Switch>
  </BrowserRouter>
);

export default Routes;
