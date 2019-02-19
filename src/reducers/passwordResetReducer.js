import { PASSWORD_RESET, PASSWORD_RESET_ERROR,SEND_EMAIL_ERROR,SEND_EMAIL } from '../actions/actionTypes';

const initialState = {
    message: {},
    errors: {},
    success:false,
    sendemail:'',
    sendemailerr:{},
  };
  
  const passwordResetReducer = (state = initialState, action) => {
    switch (action.type) {
        
      case PASSWORD_RESET:
        return {
          ...state,
          message: action.payload,
          success:true
        };
      case PASSWORD_RESET_ERROR:
        return {
          errors: action.payload
        };
        case SEND_EMAIL:
        return {
          ...state,
          sendemail: action.payload,
          success:true
        };
        case SEND_EMAIL_ERROR:
        return {
          ...state,
          sendemailerr: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default passwordResetReducer;