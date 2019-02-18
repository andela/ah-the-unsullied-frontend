import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import errorReducer from './errorReducer';
import socialLogin from './SocialLoginReducer/SocialAuthReducer';

export default  combineReducers({
  auth : loginReducer,
  errors: errorReducer,
  socialLogin
});
