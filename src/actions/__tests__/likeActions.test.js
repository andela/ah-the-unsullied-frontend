import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import * as types from '../actionTypes';
import * as actions from '../LikeActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Articles', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('likes an article', () => {
    const MockHttpResponse = {
      status: 200,
      data: { status: 200 }
    };
    const expectedActions = [
      {
        type: types.LIKE_ARTICLE_SUCCESS
      }
    ];
    const store = mockStore();
    moxios.wait(() => {
      const request = moxios.request.mostRecent();
      return request.resolve({
        status: 200,
        response: MockHttpResponse
      });
    });

    store.dispatch(actions.likeArticle()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('dislikeslikes an article', () => {
    const MockHttpResponse = {
      status: 200,
      data: { status: 200 }
    };
    const expectedActions = [
      {
        type: types.DISLIKE_ARTICLE_SUCCESS
      }
    ];
    const store = mockStore();
    moxios.wait(() => {
      const request = moxios.request.mostRecent();
      return request.resolve({
        status: 200,
        response: MockHttpResponse
      });
    });

    store.dispatch(actions.dislikeArticle()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
