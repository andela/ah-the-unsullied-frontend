import { combineReducers } from 'redux';
import loginReducer from './login';
import errorReducer from './errorReducer';

export default  combineReducers({
  auth : loginReducer,
  errors: errorReducer
  
});
