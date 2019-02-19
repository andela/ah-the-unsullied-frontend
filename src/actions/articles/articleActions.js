import { toast } from 'react-toastify';
import axios from '../../axiosConfig';
import { GET_ARTICLE, DELETE_ARTICLE } from './actionTypes';


const token = localStorage.getItem('jwtToken');
const goodToken = 'Bearer ' + token;
export const getArticle = slug => async dispath => {
  await axios
    .request({
      method: 'get',
      url: `articles/${slug}`
    })
    .then(res =>
      dispath({
        type: GET_ARTICLE,
        payload: res.data
      })
    )
    .catch(error => {
        toast.error(error.response.data.errors.error[0], { autoClose: false })
    });
};

export const deleteArticles = slug => dispatch => {
  axios
    .request({
      method: 'delete',
      url: `articles/${slug}`,
      headers: {
        Authorization: goodToken
      }
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
