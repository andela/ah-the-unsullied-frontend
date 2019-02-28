import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import * as types from '../actionTypes';
import { verifyUser } from '../verification';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Verify User', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('it should dispatch the verify user action', () => {
    const mockRes = {
      status: 200,
      data: { status: 200 }
    };
    const expectedAction = [
      {
        type: types.VERIFY_USER,
      }
    ];
    const store = mockStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      return request.resolve({
        status: 200,
        response: mockRes
      });
    });

    store.dispatch(verifyUser('payload',7)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});