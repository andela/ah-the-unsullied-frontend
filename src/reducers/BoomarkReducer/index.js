import {
    BOOKMARK_ARTICLE,
    GET_BOOKMARK_ARTICLES,
    GET_BOOKMARK_ERRORS
  } from '../../actions/actionTypes';
  
  export default function(state = {}, action) {
    switch (action.type) {
      case BOOKMARK_ARTICLE:
        return {
          ...state,
          bookmarks: action.payload,
          success: true
        };
      case GET_BOOKMARK_ARTICLES:
        return {
          ...state,
          allbookmarks: action.payload,
          articlessuccess: true
        };
      case GET_BOOKMARK_ERRORS:
        return {
          ...state,
          allbookmarks: action.payload,
          success: false
        };
      default:
        return state;
    }
  }
  