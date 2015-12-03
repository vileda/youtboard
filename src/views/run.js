import history from 'components/History';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'
import AppView from './Main';
import VideosView from './Videos';

require('normalize.css');
require('styles/App.css');

// Render the main component into the dom
ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={AppView} />
    <Route path="/videos" component={VideosView}/>
  </Router>
), document.getElementById('app'));
