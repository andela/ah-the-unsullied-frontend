import { VERIFY_USER, VERIFY_ERROR } from '../actions/actionTypes';

const initialState = {
  errors: {},
  success: false
};

const verificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case VERIFY_USER:
      return {
        ...action.payload,
        success: true
      };
    case VERIFY_ERROR:
      return {
        ...action.payload,
        success: false
      };
    default:
      return state;
  }
};

export default verificationReducer;
