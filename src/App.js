import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'materialize-css/dist/css/materialize.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'font-awesome/css/font-awesome.min.css';
import 'materialize-css/dist/js/materialize.min';
import { Home } from './components/home';
import './styles/socialAuth.css';
import Nav from './components/common/nav';
import SocialAuthentication from './components/SocialAuth/SocialLogin';

const App = () => (
      <div>
        <BrowserRouter>
          <div>
            <Nav/>
            <ToastContainer/>
            <Switch>
              <Route path="/" component={Home} exact Strict />
              <Route path="/login" component={SocialAuthentication} exact Strict/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
);
export default App;
