import {
  GET_ARTICLES,
  GET_SEARCHED_ARTICLES
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
    case GET_SEARCHED_ARTICLES:
      return {
        articles: action.payload
      };
    default:
      return state;
  }
}
