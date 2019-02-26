import { toast } from 'react-toastify';
import { VERIFY_USER, VERIFY_ERROR } from './actionTypes';
import axiosConfig from '../axiosConfig';

export const verifyUser = payload => dispatch => {
  const url = `activate/account/${payload.pk}/${payload.token}`;
  return axiosConfig
    .request({
      method: 'get',
      url: url
    })
    .then(response => {
      dispatch({
        type: VERIFY_USER,
        payload: { data: response.data }
      });
      toast.success('Email verification successful.');
    })
    .catch(err => {
      dispatch({
        type: VERIFY_ERROR,
        payload: { data: err.response.data }
      });
    });
};
