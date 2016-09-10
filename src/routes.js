import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Ranking from './components/Ranking';
import About from './components/About';
import SignUp from './containers/Sign-up';

export default (
  <Route path="/" component={App}>
    <IndexRoute path="/about" component={About} />
    <Route path="/about" component={About} />
    <Route path="/ranking" component={Ranking} />
    <Route path="/sign-up" component={SignUp} />
  </Route>
);

