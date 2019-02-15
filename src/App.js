import 'react-toastify/dist/ReactToastify.css';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import './app.scss';
import Navbar from './components/common/nav/Nav';
import Login from './components/login/login';
import Profile from './components/Profile/Profile';
import { ToastContainer } from 'react-toastify';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Navbar />
            <ToastContainer />
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
