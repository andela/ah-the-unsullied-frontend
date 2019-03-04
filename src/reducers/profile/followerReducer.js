import { FOLLOWERS } from '../../actions/profile/profileTypes';

const initialState = {
  followers: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FOLLOWERS:
      return { ...state, followers: action.payload };
    default:
      return state;
  }
};
