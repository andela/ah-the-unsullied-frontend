import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import App from './App';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const fakeProps = {
    auth: {
        user: {}
    },
    user: {}
}
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={mockStore({...fakeProps})}>
        <App  />
      </Provider>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
