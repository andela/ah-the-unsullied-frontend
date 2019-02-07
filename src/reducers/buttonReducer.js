import { UPDATE_COUNT } from '../actions/actionTypes';

const initialState = {
  count: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COUNT:
      return {
        ...state,
        count: action.payload
      };
    default:
      return state;
  }
};
