import { toast } from 'react-toastify';
import axiosConfig from '../../axiosConfig';
import { FOLLOWING, FOLLOWINGLIST, FOLLOWERS } from './profileTypes';


export const follow = username => async dispatch => {
  await axiosConfig
    .request({
      method: 'post',
      url: `profiles/${username}/follow`,
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => {
      dispatch({
        type: FOLLOWING,
        payload: response.data.profile
      });
      dispatch(followersList(username));
      dispatch(followingList(username));
    })
    .catch(error => {
      toast.error(Object.values(error.response.data.profile)[0]);
    });
};

export const followersList = username => async dispatch => {
  await axiosConfig
    .request({
      method: 'get',
      url: `profiles/${username}/followers`,
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response =>
      dispatch({
        type: FOLLOWERS,
        payload: response.data.profile
      })
    )
    .catch(error => {
      toast.error(Object.values(error.response.data.profile)[0]);
    });
};

export const followingList = username => async dispatch => {
  await axiosConfig
    .request({
      method: 'get',
      url: `profiles/${username}/following`,
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response =>
      dispatch({
        type: FOLLOWINGLIST,
        payload: response.data.profile
      })
    )
    .catch(error => {
      toast.error(Object.values(error.response.data.profile)[0]);
    });
};
