import {
  RECEIVE_DATA,
  FETCH_CALL,
  FETCH_FAILED
} from './SocialAuthTypes';


// Auth functions for social login
export function FacebookAuthentication(data) {
  return data;
}

export function GoogleAuthentication(data) {
  return data;
}

export function TwitterAuthentication(data) {
  return data;
}

// action creator method for RECEIVE_DATA action
export function receivedUserData(action) {
  return {
    type: RECEIVE_DATA,
    payload: {
      fetching: false,
      users: action,
      message: 'success'
    }
  };
}

// action creator method for FETCH_CALL action
export function fetchingCall() {
  return {
    type: FETCH_CALL,
    payload: {
      fetching: true,
      message: 'fetching'
    }
  };
}

// action creator method for FETCH_FAILED action
export function fetchFailed(error) {
  return {
    type: FETCH_FAILED,
    payload: {
      fetching: false,
      message: error
    }
  };
}
