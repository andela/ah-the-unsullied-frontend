import { toast } from 'react-toastify';
import {
  BOOKMARK_ARTICLE,
  GET_BOOKMARK_ARTICLES,
  GET_BOOKMARK_ERRORS
} from '../actionTypes';
import axiosConfig from '../../axiosConfig';

export const bookmarkArticle = slug => dispatch => {
  return axiosConfig
    .request({
      method: 'post',
      url: 'articles/' + slug + '/bookmark'
    })
    .then(res => {
      toast.success(res.data.message);
      dispatch({
        type: BOOKMARK_ARTICLE,
        payload: res.data.message
      });
    })
    .catch(err => {
      toast.error(err.response.data['detail']);
      dispatch({
        type: GET_BOOKMARK_ERRORS,
        payload: err.response.data
      });
    });
};

export const getBookmarkArticles = () => dispatch => {
  return axiosConfig
    .request({
      method: 'get',
      url: 'articles/bookmark/'
    })
    .then(res => {
      dispatch({
        type: GET_BOOKMARK_ARTICLES,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_BOOKMARK_ERRORS,
        payload: err.response.data
      });
    });
};
