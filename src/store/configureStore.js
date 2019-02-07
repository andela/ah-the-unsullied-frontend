import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const initialState = {};

function configureStoreProd() {
  const middlewares = [thunk];

  return createStore(
    initialState,
    rootReducer,
    compose(applyMiddleware(...middlewares))
  );
}

function configureStoreDev() {
  const middlewares = [thunk];
  // add support for Redux dev tools
  const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      reduxDevTools
    )
  );
  return store;
}

const configureStore =
  process.env.NODE_ENV === 'production'
    ? configureStoreProd
    : configureStoreDev;

export default configureStore;
