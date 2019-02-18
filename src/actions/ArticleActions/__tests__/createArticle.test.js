import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import * as types from '../types';
import * as actions from '../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('CreateArticle', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('it should dispatch the create article', () => {
    const mockRes = {
      status: 201,
      data: { status: 201 }
    };
    const article = {
      title: 'Test title',
      description: 'Test description',
      body: 'Test body'
    };
    const expectedAction = [
      {
        type: types.CREATE_ARTICLE
      }
    ];
    const store = mockStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      return request.resolve({
        status: 201,
        response: mockRes
      });
    });

    store.dispatch(actions.createArticle(article)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
