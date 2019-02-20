import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers/rootReducer'

const initialState = {
  profile: {}
};

let middlewares = [thunk];
const devMiddleware = [logger, reduxImmutableStateInvariant()];

if (process.env === 'development') {
  middlewares.concat(devMiddleware);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appReducer = (state, action) => {
  if (action.type === 'LOGOUT_USER') {
    state = undefined;
  }
  return rootReducer(state, action);
 };
 
 const persistedReducer = persistReducer(
  {
    key: 'root',
    storage
  },
  appReducer
 );
 
const store = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

export { store, persistor };