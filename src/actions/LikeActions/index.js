import { LIKE_ARTICLE_SUCCESS, DISLIKE_ARTICLE_SUCCESS } from '../actionTypes';
import axiosConfig from '../../axiosConfig';

export const likeArticle = slug => dispatch => {
  axiosConfig
    .request({
      method: 'post',
      url: `articles/${slug}/like`
    })
    .then(res => {
      dispatch({
        type: LIKE_ARTICLE_SUCCESS,
        payload: res.data.likes_dislikes_count
      });
    });
};

export const dislikeArticle = slug => dispatch => {
  axiosConfig
    .request({
      method: 'post',
      url: `articles/${slug}/dislike`
    })
    .then(res => {
      dispatch({
        type: DISLIKE_ARTICLE_SUCCESS,
        payload: res.data.likes_dislikes_count
      });
    });
};
