import expect from 'expect';
import verificationReducer from '../verificationReducer';

import { VERIFY_USER, VERIFY_ERROR } from '../../actions/actionTypes';

const initialState = {
  errors: {},
  success: false
};
describe('Register Reducer Tests', () => {
  it('should change state of success to true when passed with SIGNUP_USER', () => {
    const action = {
      type: VERIFY_USER
    };
    const newState = verificationReducer(initialState, action);
    expect(newState.success).toEqual(true);
  });

  it('should check SIGNUP_ERROR', () => {
    const action = {
      type: VERIFY_ERROR,
    };
    const newState = verificationReducer(initialState, action);
    expect(newState.success).toEqual(false);
  });
});
