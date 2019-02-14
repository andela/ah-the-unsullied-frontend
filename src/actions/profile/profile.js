import endpoint from '../../utils/axios';
import { VIEW_PROFILE, EDIT_PROFILE } from '../profile/profileTypes';

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
    .then(response =>
      dispatch({
        type: EDIT_PROFILE,

        payload: response.data.profile
      })
    )
    .catch(errors => {});
};
