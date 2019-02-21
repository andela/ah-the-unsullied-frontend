import { toast } from 'react-toastify';
import { GET_ARTICLES } from './types';
import { GET_ERRORS } from '../actionTypes';
import axiosConfig from '../../axiosConfig';

export const getArticles = (page = 1) => {
  return dispatch => {
    return axiosConfig
      .request({
        method: 'get',
        url: `/articles?page=${page}`
      })
      .then(response => {
        dispatch({
          type: GET_ARTICLES,
          payload: response.data.articles
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
};
