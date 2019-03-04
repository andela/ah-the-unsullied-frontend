import moxios from 'moxios';
import * as types from '../actionTypes';
import * as actions from '../BookmarkActions/index';
import { mockStore } from '../../components/login/passwordreset/mockStore';

describe('Bookmark articles', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('allows current user to bookmark article', () => {
    const user = 'You have bookmarked this article';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: user
      });
    });
    const expectedAction = [
      {
        type: types.BOOKMARK_ARTICLE,
        payload: user
      },
      {
        type: types.GET_BOOKMARK_ERRORS,
        payload: 'error'
      }
    ];
    const store = mockStore();
    store.dispatch(actions.bookmarkArticle('yesyou')).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('allows current user to get all their bookmarks', () => {
    const bookmarks = 'here all';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: bookmarks
      });
    });
    const expectedAction = [
      {
        type: types.GET_BOOKMARK_ARTICLES,
        payload: bookmarks
      },
      {
        type: types.GET_BOOKMARK_ERRORS,
        payload: bookmarks
      }
    ];
    const store = mockStore();
    store.dispatch(actions.getBookmarkArticles()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
