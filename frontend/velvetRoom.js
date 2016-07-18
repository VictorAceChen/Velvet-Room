import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './components/App.js';
import FrontPage from './components/FrontPage';

  var Routes = (
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
      <IndexRoute component={ FrontPage }/>
      </Route>
    </Router>
  );

document.addEventListener("DOMContentLoaded", () => {
  var root = document.getElementById('content');
  ReactDOM.render(Routes, root);
});
