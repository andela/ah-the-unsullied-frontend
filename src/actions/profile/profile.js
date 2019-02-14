import endpoint from "../../utils/axios";
import { VIEW_PROFILE, EDIT_PROFILE } from "../profile/profileTypes";
import { toast } from "react-toastify";

export const getUserProfile = username => async dispatch => {
  await endpoint
    .get(`/profiles/${username}`)
    .then(response => {
      dispatch({
        type: VIEW_PROFILE,
        payload: response.data.profile
      });
    })
    .catch(err => {
      console.log(err.message);
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
      toast.success("Updated Successfully");
    })
    .catch(errors => {
      console.log(errors);
    });
};
