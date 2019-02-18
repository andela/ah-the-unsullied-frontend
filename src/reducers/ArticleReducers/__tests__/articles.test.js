import * as types from '../../../actions/ArticleActions/types';
import articleReducer from '../articleReducer';

const initialState = {};

describe('article reducer', () => {
  it('it should return the initial state', () => {
    expect(articleReducer(initialState, types.GET_ARTICLES)).toEqual(
      initialState
    );
  });

  it('it should return the initial state', () => {
    expect(articleReducer(initialState, types.GET_SEARCHED_ARTICLES)).toEqual(
      initialState
    );
  });
});
