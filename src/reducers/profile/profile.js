import { VIEW_PROFILE, EDIT_PROFILE, GET_ERRORS } from '../../actions/profile/profileTypes';

const initialState = {
  profile: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case VIEW_PROFILE:
      return { ...state, profile: action.payload };
    case EDIT_PROFILE:
      return { ...state, profile: action.payload };
    case GET_ERRORS: 
      return action.payload
    default:
      return state;
  }
};
