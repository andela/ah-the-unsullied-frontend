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
      const decoded = res.data.user;
      // Set current user
      document.getElementById('foo').style.display = 'none';
      toast.success('Welcome ' + decoded.email, { autoClose: 10000 });
      dispatch({
        type: SET_CURRENT_USER,
        payload: decoded
      });
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

export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
