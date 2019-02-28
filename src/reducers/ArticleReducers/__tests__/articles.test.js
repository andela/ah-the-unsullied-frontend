import * as types from '../../../actions/ArticleActions/types';
import articleReducer from '../articleReducer';
import {GET_ARTICLES,GET_SEARCHED_ARTICLES,CREATE_ARTICLE} from '../../../actions/ArticleActions/types';

const initialState = {};
const newArticle = {
  'title': 'Happy',
  'tag_list':[],
  'description': 'A fitting description',
  'body': 'Send_mail is the function'};

describe('article reducer', () => {
  it('when passed with SIGNUP_USER', () => {
    const action = {
      type: GET_ARTICLES
    };
    const newState = articleReducer(initialState, action);
    expect(newState.success).toEqual(action.payload);
  });

  it('when passed with SIGNUP_USER', () => {
    const action = {
      type: GET_SEARCHED_ARTICLES
    };
    const newState = articleReducer(initialState, action);
    expect(newState.success).toEqual(action.payload);
  });

  it('it should return the initial state', () => {
    expect(articleReducer(initialState, types.EDIT_ARTICLE)).toEqual(
      initialState
    );
  });
  it('when passed with CREATE_ARTICLE', () => {
    const action = {
      type: CREATE_ARTICLE,
      payload: newArticle,
    };
    const newState = articleReducer(initialState, action);
    expect(newState.success).toEqual();
  });
});
