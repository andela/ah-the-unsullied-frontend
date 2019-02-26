import {
  LIKE_ARTICLE_SUCCESS,
  DISLIKE_ARTICLE_SUCCESS
} from '../../actions/actionTypes';

export default function(state = {}, action) {
  switch (action.type) {
    case LIKE_ARTICLE_SUCCESS:
      return {
        ...state,
        likesDislikes: action.payload
      };
    case DISLIKE_ARTICLE_SUCCESS:
      return {
        ...state,
        likesDislikes: action.payload
      };
    default:
      return state;
  }
}
