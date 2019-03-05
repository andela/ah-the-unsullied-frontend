import moxios from 'moxios';
import * as types from '../actionTypes';
import * as actions from '../resetPasswordAction';
import { mockStore } from '../../components/login/passwordreset/mockStore';

describe('Reset password', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('it should dispatch the reset password action', () => {
    const mockRes = {
      status: 200,
      data: { status: 200 }
    };
    const new_password = {
      password: 'kwanj@gmail.com',
      confirm_password: 'kwanj@gmail.com',
      token: 'ffefewfwefewf'
    };
    const expectedAction = [
      {
        type: types.PASSWORD_RESET,
        payload: 'user'
      }, 
      {
        type: types.PASSWORD_RESET_ERROR,
        payload: 'error'
      }
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      return request.resolve({
        status: 200,
        response: mockRes
      });
    });
    const store = mockStore();
    store.dispatch(actions.resetPassword(new_password)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('it should dispatch the sendEmail', () => {
    const mockRes = {
      status: 200,
      data: { status: 200 }
    };
    const new_password_email = {
      user_email: 'kwanj@gmail.com',
    };
    const expectedAction = [
      {
        type: types.SEND_EMAIL,
        payload: 'message'
      }, 
      {
        type: types.SEND_EMAIL_ERROR,
        payload: 'error'
      }
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      return request.resolve({
        status: 200,
        response: mockRes
      });
    });
    const store = mockStore();
    store.dispatch(actions.sendEmail(new_password_email)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
