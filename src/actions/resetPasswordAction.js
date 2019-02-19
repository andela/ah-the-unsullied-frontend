import axiosConfig from '../axiosConfig';
import { PASSWORD_RESET, PASSWORD_RESET_ERROR, SEND_EMAIL_ERROR,SEND_EMAIL } from './actionTypes';

export const resetPassword = (password,confirm_password, token) => dispatch => {
    axiosConfig
    .request({
        method:'put',
        url:'users/password-done/'+token,
        data:{password:password, confirm_password:confirm_password}
    })
    .then(res=> {
        document.getElementById("loader-div").style.display = "block";
        dispatch({
            type: PASSWORD_RESET,
            payload: res.data
          });    
    })
    .catch( err => {
        dispatch({
            type: PASSWORD_RESET_ERROR,
            payload: err.response.data
          });
    })
}

export const sendEmail=(user_email)=>dispatch => {
    axiosConfig
    .request({
        method:'post',
        url:'users/password-reset/',
        data:{email:user_email}
    })
    .then(res=> {
        document.getElementById("loader-div").style.display = "block";
        dispatch({
            type: SEND_EMAIL,
            payload: res.data["message"]
          }); 
    })
    .catch( err => {
        dispatch({
            type: SEND_EMAIL_ERROR,
            payload: err.response.data
          }); 
    })
}
