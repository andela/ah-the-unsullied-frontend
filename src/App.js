import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './app.scss';
import Navbar from './components/common/nav/Nav';
import Login from './components/login/login';
import Profile from './components/Profile/Profile';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route path="/login" component={Login} exact />
              <Route path="/profile" component={Profile} exact />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
