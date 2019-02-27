import articleReducer from '../articleReducer';
import {
  GET_ARTICLES,
  GET_SEARCHED_ARTICLES,
  EDIT_ARTICLE
} from '../../../actions/ArticleActions/types';

const initialState = {};
const newArticle = {
  title: 'Happy',
  tag_list: [],
  description: 'A fitting description',
  body: 'Send_mail is the function'
};

describe('article reducer', () => {
  it('should change state of success to true when passed with SIGNUP_USER', () => {
    const action = {
      type: GET_ARTICLES
    };
    const newState = articleReducer(initialState, action);
    expect(newState.success).toEqual(true);
  });

  it('should change state of success to true when passed with SIGNUP_USER', () => {
    const action = {
      type: GET_SEARCHED_ARTICLES
    };
    const newState = articleReducer(initialState, action);
    expect(newState.success).toEqual(true);
  });

  it('it should return the initial state', () => {
    expect(articleReducer(initialState, EDIT_ARTICLE)).toEqual(
      initialState
    );
  });

  it('should change state of success to true when passed with SIGNUP_USER', () => {
    const action = {
      type: GET_SEARCHED_ARTICLES,
      payload: newArticle
    };
    const newState = articleReducer(initialState, action);
    expect(newState.success).toEqual(true);
  });
});
