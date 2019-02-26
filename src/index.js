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
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
