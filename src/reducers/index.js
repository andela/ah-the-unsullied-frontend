import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import errorReducer from './errorReducer';

export default  combineReducers({
  auth : loginReducer,
  errors: errorReducer
  
});
