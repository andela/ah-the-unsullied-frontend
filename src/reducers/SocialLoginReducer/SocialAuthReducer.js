import {
  GOOGLE, FACEBOOK, TWITTER, RECEIVE_DATA, FETCH_CALL, FETCH_FAILED,
} from '../../actions/SocialAuth/SocialAuthTypes';

export default function socialAuthFunc(state = {}, action) {

  switch (action.type) {

    case FACEBOOK:
      return Object.assign({}, state, action.payload);

    case GOOGLE:
      return Object.assign({}, state, action.payload);

    case TWITTER:
      return Object.assign({}, state, action.payload);

    case RECEIVE_DATA:
      return Object.assign({}, state, action.payload);

    case FETCH_CALL:
      return Object.assign({}, state, action.payload);

    case FETCH_FAILED:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
}
