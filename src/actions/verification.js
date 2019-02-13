import { VERIFY_USER, VERIFY_ERROR } from './actionTypes';
// import axios from 'axios';
import { toast } from 'react-toastify';
import axiosConfig from '../axiosConfig';

export const verifyUser = payload => dispatch => {
  const url = `activate/account/${payload.pk}/${payload.token}`;
  axiosConfig
    .request({
      method: 'get',
      url: url
    })
    .then(response => {
      console.log(response);
      dispatch({
        type: VERIFY_USER,
        payload: { data: response.data }
      });
      toast.success('Email verification successful.');
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: VERIFY_ERROR,
        payload: { data: err.response.data }
      });
    });
};
