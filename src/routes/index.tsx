import React from 'react';
import { Route, Switch } from 'react-router';
import Trade from '../routes/Trade';
import NoMatch from '../components/NoMatch';
import NavBar from '../components/NavBar';

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route path="/" component={Trade} />
      <Route path="/trade/:direction" component={Trade} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default routes;
