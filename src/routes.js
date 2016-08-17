import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import HelloWorld from './components/HelloWorld';
import HelloApi from './containers/HelloApi';
import HelloBootstrap from './components/HelloBootstrap';

export default (
  <Route path="/" component={App}>
    <Route path="/hello-world" component={HelloWorld} />
    <Route path="/hello-api" component={HelloApi} />
    <Route path="/hello-bootstrap" component={HelloBootstrap} />
  </Route>
);

