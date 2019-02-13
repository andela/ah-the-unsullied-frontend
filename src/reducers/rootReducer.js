import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import errorReducer from './errorReducer';
import socialLogin from './SocialLoginReducer/SocialAuthReducer';
import signUpReducer from './signUpReducer';
import verificationReducer from './verificationReducer';

export default combineReducers({
  signup: signUpReducer,
  verifyEmail: verificationReducer,
  auth : loginReducer,
  errors: errorReducer,
  socialLogin
});
