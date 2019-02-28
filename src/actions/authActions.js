import { toast } from 'react-toastify';
import { SIGNUP_USER, SIGNUP_ERROR } from './actionTypes';
import axiosConfig from '../axiosConfig';

export const registerUser = newUserData => dispatch => {
  const userData = {
    user: newUserData
  };

  return axiosConfig
    .request({
      method: 'post',
      url: 'users/',
      data: userData
    })
    .then(response => {
      dispatch({
        type: SIGNUP_USER,
        payload: response.data
      });
      toast.success(
        'You have successfully created an account,please check your email to verify your account.'
      );
    })
    .catch(err => {
      dispatch({
        type: SIGNUP_ERROR,
        payload: err.response.data
      });
    });
};
