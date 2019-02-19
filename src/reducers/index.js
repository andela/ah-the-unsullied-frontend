import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import passwordResetReducer from './passwordResetReducer';
import errorReducer from './errorReducer';

export default  combineReducers({
  auth : loginReducer,
  errors: errorReducer,
  passwordreset: passwordResetReducer,
});
