import endpoint from '../../utils/axios';
import {VIEW_PROFILE,  EDIT_PROFILE} from '../profile/profileTypes'; 
import { getCurrentUser } from '../../utils/currentUser'
import Axios from 'axios';


export const getUserProfile = username => async dispatch => {
    await endpoint.get(`/profiles/${username}`)
        .then(response => dispatch({
            type: VIEW_PROFILE,
            payload:response.data.profile
        }))
        
    
    .catch(err => {
        console.log(err.message);
    })
}

