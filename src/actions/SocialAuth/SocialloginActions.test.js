import * as testActions from './SocialLoginActions';
import * as testTypes from './SocialAuthTypes';

it('should return twitter auth data', () =>{
  const twitterPayload = {
    'provider': 'Twitter',
    'access_token': '12ADHabshDBFU2',
    'access_token_secret': 'thisISISNDHV3Y17E7'
  };
  expect(testActions.TwitterAuthentication(twitterPayload)).toEqual(twitterPayload);
});

it('should return facebook auth data', ()=>{
  const facebookPayload = {
    'provider': 'facebook',
    'access_token': 'sdfgh12323re'
  };
  expect(testActions.FacebookAuthentication(facebookPayload)).toEqual(facebookPayload);
});

it('should return google auth data', ()=>{
  const googlePayload = {
    'provider': 'google',
    'access_token': '1234567dxdcgvhb'
  };
  expect(testActions.FacebookAuthentication(googlePayload)).toEqual(googlePayload);
});

it('should return user data',()=>{
  const userData = {
    'email': 'allan@gmail.com',
    'username': 'Nyagwachi999'
  };
  expect(testActions.receivedUserData(userData)).toEqual(
    {
      type: testTypes.RECEIVE_DATA,
      payload: {
        fetching: false,
        users: userData,
        message: 'success'
      }
    }
  );
});

it('should return fetching status when fetching data', ()=>{
  expect(testActions.fetchingCall()).toEqual({
    type: testTypes.FETCH_CALL,
    payload: {
      fetching: true,
      message: 'fetching'
    }
  });
});

it('should return fetching error', ()=>{
  const error = {
    'msg': 'no username'
  };
  expect(testActions.fetchFailed(error)).toEqual({
    type: testTypes.FETCH_FAILED,
    payload: {
      fetching: false,
      message: error
    }
  });
});
