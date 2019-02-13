import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'materialize-css/dist/js/materialize.min';
import './styles/socialAuth.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Verification from './components/auth/Verification';
import { Home } from './components/home';
import SocialAuthentication from './components/SocialAuth/SocialLogin';
import Nav from './components/common/nav';
import Resetpasswordemail from './components/login/passwordreset/Resetpasswordemail';
import Resetpassword from './components/login/passwordreset/Resetpassword';

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <BrowserRouter>
          <div>
            <Nav/>
            <ToastContainer/>
            <Switch>
              <Route path="/" component={Home} exact Strict />
              <Route path="/login" component={SocialAuthentication} exact Strict/>
              <Route  path="/password-reset" component={Resetpasswordemail}  />
              <Route  path="/api/users/password-done/:token" component={Resetpassword}  />
              <Route path='/api/activate/account/:pk/:token' component={Verification}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </BrowserRouter>
  </div>
);
export default App;
