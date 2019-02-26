import {
  POST_RATING,
  VIEW_AVERAGE_RATING,
  RATING_ERRORS
} from './actionTypes';
import axios from '../../axiosConfig'

export function postRating(rating, slug){
  return function(dispatch){
    return axios.request({
      method: 'post',
      url: `articles/${slug}/rate-article`,
      data: rating
    })
      .then(res =>{
        dispatch(postRatingSuccess(res.data));
        dispatch(getAverageRating(slug))
      })
      .catch( err=> {
        dispatch(getRatingErrors(err))
      });
  }
}

export function getAverageRating(slug){
return function (dispatch) {
  return axios.request({
    method: 'get',
    url: `articles/${slug}`
  })
    .then( res =>{
      dispatch(getAverageRatingSuccess(res.data.article.rating));
    })
    .catch( err => {
      dispatch(getRatingErrors(err))
    });
}
}

export function getRatingErrors(errors){
  return{
    type: RATING_ERRORS,
    payload: errors
  }
}

export function postRatingSuccess(rating){
  return {
    type: POST_RATING,
    payload: rating
  }
}

export function getAverageRatingSuccess(data){
  return {
    type: VIEW_AVERAGE_RATING,
    payload: data
  }
}
