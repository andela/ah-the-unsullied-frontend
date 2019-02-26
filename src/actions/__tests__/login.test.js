import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import * as types from '../actionTypes';
import * as actions from '../loginActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Login User', () => {
  beforeEach(function() {
    moxios.install();
  });

  const store = mockStore();
  const mockRes = {
    status: 201,
    data: { status: 201 }
  };
  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    return request.resolve({
      status: 201,
      response: mockRes
    });
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('it should dispatch loginUser', () => {
    const user = {
      email: 'email@gmail.com',
      password: 'password'
    };
    const expectedAction = [
      {
        type: types.SET_CURRENT_USER
      }
    ];

    store.dispatch(actions.loginUser(user)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('it should dispatch get errors when user does not exist', () => {
    const mockHttpResponse = {
      status: 400,
      response: { status: 400 }
    };
    const expectedAction = [
      {
        type: types.GET_ERRORS
      }
    ];
    const store = mockStore();
    const user = {
      email: 'email@gmail.com',
      password: 'password'
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      return request.reject({
        status: 400,
        response: mockHttpResponse
      });
    });
    store.dispatch(actions.loginUser(user)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('it should dispatch logout when user wants to exit', () => {
    const mockHttpResponse = {
      status: 200,
      response: { status: 200 }
    };
    const expectedAction = [
      {
        type: "LOGOUT_USER"},{ 
          payload: {},
          type: "SET_CURRENT_USER"
        }
      ];
    const store = mockStore();
  
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      return request.reject({
        status: 200,
        response: mockHttpResponse
      });
    });
    store.dispatch(actions.logoutUser()) 
      expect(store.getActions()).toEqual(expectedAction);
    });
 
});
