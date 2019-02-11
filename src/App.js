import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/socialAuth.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Verification from './components/auth/Verification';
import SocialAuthentication from './components/SocialAuth/SocialLogin';
import Resetpasswordemail from './components/login/passwordreset/Resetpasswordemail';
import Resetpassword from './components/login/passwordreset/Resetpassword';
import 'materialize-css/dist/css/materialize.min.css';

import Profile from './components/Profile/Profile';
import { Home } from './components/home';

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <div className="App">
          <ToastContainer />
          <Switch>
            <Route path="/" component={Home} exact Strict />
            <Route path="/profile" component={Profile} exact />
            <Route
              path="/login"
              component={SocialAuthentication}
              exact
              Strict
            />
            <Route path="/password-reset" component={Resetpasswordemail} />
            <Route
              path="/api/users/password-done/:token"
              component={Resetpassword}
            />
            <Route
              path="/api/activate/account/:pk/:token"
              component={Verification}
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
