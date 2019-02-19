import expect from 'expect';
import signUpReducer from '../signUpReducer';

import { SIGNUP_USER, SIGNUP_ERROR } from '../../actions/actionTypes';

const initialState = {
  users: {},
  errors: {},
  success: false
};
const newUserData = {
  username: 'unsullied',
  email: 'unsullied@gmail.com',
  password: '12345678A!23'
};
const newUserDataempty = {
  username: '',
  email: 'unsullied@gmail.com',
  password: '12345678A!23'
};
describe('Register Reducer Tests', () => {
  it('should change state of success to true when passed with SIGNUP_USER', () => {
    const action = {
      type: SIGNUP_USER,
      payload: newUserData
    };
    const newState = signUpReducer(initialState, action);
    expect(newState.success).toEqual(true);
    expect(newState.users).toEqual(action.payload);
  });

  it('should check SIGNUP_ERROR', () => {
    const action = {
      type: SIGNUP_ERROR,
      payload: newUserDataempty
    };
    const newState = signUpReducer(initialState, action);
    expect(newState.errors).toEqual(action.payload);
    expect(newState.success).toEqual(false);
  });
});
