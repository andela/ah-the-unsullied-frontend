import { VIEW_PROFILE,  EDIT_PROFILE 
} from '../../actions/profile/profileTypes';

const initialState = {
    profile :{}
};

export default ( state = initialState, action) => {
    switch(action.type) {
    case VIEW_PROFILE: 
        return {...state, profile: action.payload};
    case EDIT_PROFILE: 
        return {...state, profile: action.payload};
    default: 
        return state;
    }
};
