import { toast } from 'react-toastify';
import { LIKE_ARTICLE_SUCCESS, DISLIKE_ARTICLE_SUCCESS } from '../actionTypes';
import axiosConfig from '../../axiosConfig';

export const likeArticle = slug => dispatch => {
  return axiosConfig
    .request({
      method: 'post',
      url: `articles/${slug}/like`
    })
    .then(res => {
      dispatch({
        type: LIKE_ARTICLE_SUCCESS,
        payload: res.data.likes_dislikes_count
      });
    })
    .catch(err => {
      toast.error('please login to like or dislike this article');
    });
};

export const dislikeArticle = slug => dispatch => {
  return axiosConfig
    .request({
      method: 'post',
      url: `articles/${slug}/dislike`
    })
    .then(res => {
      dispatch({
        type: DISLIKE_ARTICLE_SUCCESS,
        payload: res.data.likes_dislikes_count
      });
    })
    .catch(err => {
      toast.error('please login to like or  dislike this article');
    });
};
