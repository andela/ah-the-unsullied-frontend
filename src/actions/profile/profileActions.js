import { toast } from 'react-toastify';
import axiosConfig from '../../axiosConfig';
import setAuthToken from '../../utils/setAuthToken';
import { VIEW_PROFILE, EDIT_PROFILE, GET_ERRORS } from './profileTypes';


const token = localStorage.getItem('jwtToken');
setAuthToken(token);

export const getUserProfile = username => async dispatch => {
  await axiosConfig
    .request({
      method: 'get',
      url: `profiles/${username}`,
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response =>
      dispatch({
        type: VIEW_PROFILE,
        payload: response.data.profile
      })
    )
    .catch(err => {
      toast.error('Sorry, your profile cannot be displayed at this time.');
    });
};

export const EditUserProfile = (username, data) => async dispatch => {
  await axiosConfig
    .request({
      method: 'put',
      url: `profiles/${username}`,
      data: data
    })
    .then(response => {
      dispatch({
        type: EDIT_PROFILE,
        payload: response.data.profile
      });
      toast.success('Updated Successfully');
    })
    .catch(error => {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      });
      toast.error(Object.values(error.response.data.profile)[0]);
    });
};
