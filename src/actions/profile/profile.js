import endpoint from '../../utils/axios';
import { VIEW_PROFILE, EDIT_PROFILE, GET_ERRORS } from '../profile/profileTypes';
import { toast } from 'react-toastify';

export const getUserProfile = username => async dispatch => {
  await endpoint
    .get(`/profiles/${username}`)
    .then(response =>
      dispatch({
        type: VIEW_PROFILE,
        payload: response.data.profile
      })
    )
    .catch(err => {
      console.log(err.response.data)
    });
};

export const EditUserProfile = (username, data) => async dispatch => {
  await endpoint
    .put(`/profiles/${username}`, data)
    .then(response => {
      dispatch({
        type: EDIT_PROFILE,
        payload: response.data.profile
      });
      toast.success('Updated Successfully');
    })
    .catch(error =>{
    
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data

      }); 
      toast.error(Object.values(error.response.data.profile)[0])
    });
};
