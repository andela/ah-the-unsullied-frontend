import { combineReducers } from 'redux';
import profile from '../reducers/profile/profileReducer';
import loginReducer from './loginReducer';
import errorReducer from './errorReducer';
import socialLogin from './SocialLoginReducer/SocialAuthReducer';
import signUpReducer from './signUpReducer';
import verificationReducer from './verificationReducer';
import passwordreset from './passwordResetReducer';
import articleReducer from './ArticleReducers/articleReducer';
import ratingReducer from './RatingsReducer/RatingsReducer';
import likeDislikeReducer from './LikeReducer';
import bookmarkReducer from './BoomarkReducer';
import articlereducer from './Articles';
import followers from './profile/followerReducer';
import following from './profile/followingReducer';

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
  likesDislikes: likeDislikeReducer,
  bookmarkReducer: bookmarkReducer,
  followers,
  following
});
