import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';
import setAuthToken from '../utils/setAuthToken';

import axiosConfig from '../axiosConfig';
import { GET_ERRORS, SET_CURRENT_USER } from './actionTypes';

// Login - Get User Token
export const loginUser = userData => dispatch => {
  const formatData = {
    user: userData
  };
  axiosConfig
    .request({
      method: 'post',
      url: 'users/login/',
      data: formatData
    })
    .then(res => {
      // Save to localStorage
      const { token } = res['data']['user'];
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch({
        type: SET_CURRENT_USER,
        payload: decoded
      });
      window.location.href = '/';
    })
    .catch(err => {
      toast.error(err.response.data.errors.error[0]);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
