import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import * as types from '../actionTypes';
import * as actions from '../loginActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async api requests', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('set current user after successifully calling api', () => {
    const user = { email: 'kwanj@gmail.com', password: 'password' };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: user
      });
    });
    const expectedAction = [
      {
        type: types.SET_CURRENT_USER,
        payload: user
      }
    ];
    const store = mockStore({ payload: {} });
    store.dispatch(actions.setCurrentUser(user));
    // return of async actions
    expect(store.getActions()).toEqual(expectedAction);
  });
});

