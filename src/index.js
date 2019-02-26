import React from 'react';
import ReactDOM from 'react-dom';
import HttpsRedirect from 'react-https-redirect';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <HttpsRedirect>
    <App/>
    </HttpsRedirect>
  </Provider>,
  document.getElementById('root')
);
