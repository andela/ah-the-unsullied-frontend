import {
  POST_RATING,
  VIEW_AVERAGE_RATING,
  RATING_ERRORS
} from '../../actions/Rating/actionTypes';

const initialState = {
  articleRating: {},
  ratingError: {},
  ratingGiven: {}
};

export default function ratingReducer(state = initialState, action){
  switch(action.type){
    case POST_RATING:
      return {
        ...state,
        ratingGiven: action.payload
      };
    case VIEW_AVERAGE_RATING:
      return {
        ...state,
        articleRating: action.payload
      };
    case RATING_ERRORS:
      return {
        ...state,
        ratingError: action.payload
      };
    default:
      return state
  }
}
