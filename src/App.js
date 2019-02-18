import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'materialize-css/dist/css/materialize.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { Home } from './components/home';

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <ToastContainer />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
