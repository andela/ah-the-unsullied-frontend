import { FOLLOWINGLIST } from '../../actions/profile/profileTypes';

const initialState = {
  following: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FOLLOWINGLIST:
      return { ...state, following: action.payload };
    default:
      return state;
  }
};
