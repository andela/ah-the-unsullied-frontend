import expect from 'expect';
import * as types from '../../../actions/actionTypes';
import bookmarkArticleReducer from '../../BoomarkReducer/index';

describe('bookmark reducer', () => {
  const initialState = {};
  it('should to bookmark article', () => {
    const action = {
      type: types.BOOKMARK_ARTICLE,
      payload: 'You have successfully bookmarked this article'
    };
    const newState = bookmarkArticleReducer(initialState, action);
    expect(newState.success).toEqual(true);
    expect(action.type).toEqual('BOOKMARK_ARTICLE');
    expect(action.payload).toEqual(
      'You have successfully bookmarked this article'
    );
  });
  it('should fail to bookmark article', () => {
    const action = {
      type: types.GET_BOOKMARK_ERRORS,
      payload: 'error'
    };
    const newState = bookmarkArticleReducer(initialState, action);
    expect(newState.success).toEqual(false);
    expect(action.type).toEqual('GET_BOOKMARK_ERRORS');
    expect(action.payload).toEqual('error');
  });
  it('should get all bookmarked articles', () => {
    const action = {
      type: types.GET_BOOKMARK_ARTICLES,
      payload: 'all articles'
    };
    const newState = bookmarkArticleReducer(initialState, action);
    expect(newState.articlessuccess).toEqual(true);
    expect(action.type).toEqual('GET_BOOKMARK_ARTICLES');
    expect(action.payload).toEqual('all articles');
  });
});

