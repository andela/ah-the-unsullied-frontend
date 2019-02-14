import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react'; 
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './components/common/nav/Nav';
import PropTypes from 'prop-types';
import './app.scss';
import Login from './components/login/login';
import Profile from './components/Profile/Profile';
import 'materialize-css/dist/css/materialize.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


class App extends Component {

 
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Navbar />
            <ToastContainer/>
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
