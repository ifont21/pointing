import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Ranking from './containers/Ranking';
import About from './components/About';
import Start from './components/Start';
import InitGame from './containers/InitGame';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={About} />
    <Route path="/about" component={About} />
    <Route path="/ranking" component={Ranking} />
    <Route path="/start" component={Start} />
    <Route path="/begin" component={InitGame} />
  </Route>
);

