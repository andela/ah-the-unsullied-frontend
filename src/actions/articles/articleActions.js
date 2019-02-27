import { toast } from 'react-toastify';
import axiosConfig from '../../axiosConfig';
import { GET_ARTICLE, DELETE_ARTICLE } from './actionTypes';



export const getArticle = slug => async dispath => {
  await axiosConfig
    .request({
      method: 'get',
      url: `articles/${slug}`
    })
    .then(res =>{
      dispath({
        type: GET_ARTICLE,
        payload: res.data
      })
    }
    )
    .catch(error => {
        toast.error(error.response.data.errors.error[0], { autoClose: false })
    });
};

export const deleteArticles = slug => dispatch => {
  axiosConfig
    .request({
      method: 'delete',
      url: `articles/${slug}`,
    })
    .then((res) =>{
      toast.success('Article deleted!')
      dispatch({
        type: DELETE_ARTICLE,
        payload: true
      })
    }
      )
};
