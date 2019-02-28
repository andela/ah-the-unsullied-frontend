import { combineReducers } from 'redux';
import profile from '../reducers/profile/profileReducer';
import loginReducer from './loginReducer';
import errorReducer from './errorReducer';
import socialLogin from './SocialLoginReducer/SocialAuthReducer';
import signUpReducer from './signUpReducer';
import verificationReducer from './verificationReducer';
import passwordreset from './passwordResetReducer';
import articleReducer from './ArticleReducers/articleReducer';
import articlereducer from './Articles';
import ratingReducer from './RatingsReducer/RatingsReducer';
import bookmarkReducer from './BoomarkReducer';

export default combineReducers({
  signup: signUpReducer,
  verifyEmail: verificationReducer,
  auth: loginReducer,
  errors: errorReducer,
  socialLogin,
  passwordreset,
  profile,
  articles: articleReducer,
  articlereducer,
  rating: ratingReducer,
  bookmarkReducer: bookmarkReducer
});
