import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'redux';

import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

import Dashboard from './components/DashboardContainer.js';
import App from './components/App.js';

import dataStore from './store.js';

export default class app extends React.Component {

  render() {
    return(
      <div>
        <App />
      </div>
    )
  }

}

ReactDOM.render(<Router history={hashHistory}>
                  <Route path="/" component={app}>
                    <IndexRoute component={App} />
                  </Route>

                  <Route path="/dashboard" component={Dashboard}>
                  </Route>


                </Router>, document.getElementById('app'));
