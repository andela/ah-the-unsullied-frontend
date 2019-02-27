import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import * as types from '../actionTypes';
import { registerUser } from '../authActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Create User', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('it should dispatch the signup user action', () => {
    const mockRes = {
      status: 201,
      data: { status: 201 }
    };
    const user = {
      username: 'kwanj',
      email: 'kwanj@gmail.com',
      password: 'password'
    };
    const expectedAction = [
      {
        type: types.SIGNUP_USER
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

    store.dispatch(registerUser(user)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
