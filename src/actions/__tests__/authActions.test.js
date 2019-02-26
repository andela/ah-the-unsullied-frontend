import moxios from 'moxios';
import { SIGNUP_USER, SIGNUP_ERROR } from '../actionTypes';
import { mockStore } from '../../_helpers/testHelpers';

const newUserData = {
    username: 'testUser',
    email: 'test@mail.com',
    password: 'Pass@1234'
};

describe('Register', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should post user details after successfull HTTP call', () => {
    const mockHttpResponse = {
      status: 201,
      data: { status: 201 }
    };
    const expectedActions = [
      {
        type: SIGNUP_USER,
        payload: newUserData,
      }
    ];
    const store = mockStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      return request.resolve({
        status: 201,
        response: mockHttpResponse
      });
    });
    
    store.dispatch({
        type: SIGNUP_USER,
        payload: newUserData,
    })
    expect(store.getActions()).toEqual(expectedActions);
    
  });

  it('should fail to post user details after unsuccessfull HTTP call', () => {
    const mockHttpResponse = {
      status: 400,
      response: { status: 400, data: { errors: [] } }
    };
    const expectedActions = [
      {
        type: SIGNUP_ERROR,
        errors: newUserData,
      }
    ];
    const store = mockStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      return request.reject({
        status: 400,
        response: mockHttpResponse
      });
    });
    store.dispatch({
        type: SIGNUP_ERROR,
        errors: newUserData,
    })
    expect(store.getActions()).toEqual(expectedActions);
  });
});