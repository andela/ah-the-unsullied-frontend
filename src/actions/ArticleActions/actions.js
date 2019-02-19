import { toast } from 'react-toastify';
import { GET_ARTICLES, GET_SEARCHED_ARTICLES} from './types';
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


export const getSearchedArticles = (searchtext, filterby) => {
  let url = 'search?';
  if (filterby !== null) {
    url = url + filterby + '=' + searchtext;
  } else {
    url = url + 'search=' + searchtext;
  }
  return dispatch => {
    return axiosConfig
      .request({
        method: 'get',
        url: url
      })
      .then(response => {
        dispatch({
          type: GET_SEARCHED_ARTICLES,
          payload: response.data
        });
      })
    }
  }

