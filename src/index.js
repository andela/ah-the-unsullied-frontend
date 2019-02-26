import React from 'react';
import ReactDOM from 'react-dom';
import HttpsRedirect from 'react-https-redirect';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/configureStore';
import App from './App';


ReactDOM.render(
  <Provider store={store}>
   <HttpsRedirect>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    </HttpsRedirect>
  </Provider>,
  document.getElementById('root')
);

