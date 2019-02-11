import { combineReducers } from 'redux';
import loginReducer from './login';
import errorReducer from './errorReducer';
import profile from '../reducers/profile/profile';

export default combineReducers({
  auth: loginReducer,
  errors: errorReducer,
  profile: profile
});
