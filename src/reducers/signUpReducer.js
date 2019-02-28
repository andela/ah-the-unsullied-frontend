import { SIGNUP_USER, SIGNUP_ERROR } from '../actions/actionTypes';

const initialState = {
  users: {},
  errors: {},
  success: false
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return {
        users: action.payload,
        success: true
      };
    case SIGNUP_ERROR:
      return {
        errors: action.payload,
        success: false
      };
    default:
      return state;
  }
};

export default signUpReducer;
