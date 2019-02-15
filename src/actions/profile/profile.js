import { toast } from 'react-toastify';
import { VIEW_PROFILE, EDIT_PROFILE } from '../profile/profileTypes';
import endpoint from '../../utils/axios';

export const getUserProfile = username => async dispatch => {
  await endpoint
    .get(`/profiles/${username}`)
    .then(response =>
      dispatch({
        type: VIEW_PROFILE,
        payload: response.data.profile
      })
    )
    .catch(err => {});
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
    .catch(errors => {});
};
