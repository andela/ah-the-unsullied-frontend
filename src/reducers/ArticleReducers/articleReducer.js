import {
  GET_ARTICLES,
  GET_SEARCHED_ARTICLES,
  CREATE_ARTICLE,
  EDIT_ARTICLE
} from '../../actions/ArticleActions/types';

export default function(
  state = {
    articles: []
  },
  action
) {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        articles: action.payload
      };
    case CREATE_ARTICLE:
      return {
        newArticle: action.payload
      };
    case GET_SEARCHED_ARTICLES:
      return {
        articles: action.payload
      };
    case EDIT_ARTICLE:
      return {
        updatedArticle: action.payload
      };
    default:
      return state;
  }
}
