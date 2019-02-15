import 'react-toastify/dist/ReactToastify.css';
import 'materialize-css/dist/css/materialize.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { Nav } from './components/common/nav';
import Profile from './components/Profile/Profile';
import { ToastContainer } from 'react-toastify';
import { Home } from './components/home';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <ToastContainer />
            <Switch>
              <Route path="/profile" component={Profile} exact />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
