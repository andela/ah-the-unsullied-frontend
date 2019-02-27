import {
  GET_ARTICLES,
  GET_SEARCHED_ARTICLES,
  CREATE_ARTICLE,
  EDIT_ARTICLE
} from '../../actions/ArticleActions/types';

export default function(
  state = {
    articles: [],
    success:false
  },
  action
) {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        articles: action.payload,
        success: true
      };
    case CREATE_ARTICLE:
      return {
        newArticle: action.payload,
        success: true
      };
    case GET_SEARCHED_ARTICLES:
      return {
        articles: action.payload,
        success: true
      };
    case EDIT_ARTICLE:
      return {
        updatedArticle: action.payload,
        success: true
      };
    default:
      return state;
  }
}
