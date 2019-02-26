import { toast } from 'react-toastify';
import setAuthToken from '../utils/setAuthToken';

import axiosConfig from '../axiosConfig';
import { GET_ERRORS, SET_CURRENT_USER, LOGOUT_USER } from './actionTypes';

// Login - Get User Token
export const loginUser = userData => dispatch => {
  const formatData = {
    user: userData
  };
  return axiosConfig
    .request({
      method: 'post',
      url: 'users/login/',
      data: formatData
    })
    .then(res => {
      const { token } = res['data']['user'];
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      const decoded = res.data.user;
      localStorage.setItem('username', decoded.username);
      toast.success('Welcome to Authors Haven ' + decoded.username, {
        autoClose: 4000
      });
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
  dispatch({
    type: LOGOUT_USER
  });
  localStorage.clear();
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
