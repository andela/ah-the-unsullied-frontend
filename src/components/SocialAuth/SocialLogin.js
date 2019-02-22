import React, { Component } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { connect } from 'react-redux';
import * as SocialFunctions from '../../actions/SocialAuth/SocialLoginActions';
import { auth, GoogleProvider, FacebookProvider, TwitterProvider } from './firebase';
import Login from '../../components/login';
import { FACEBOOK, GOOGLE, TWITTER } from '../../actions/SocialAuth/SocialAuthTypes';
import * as LoginActions from '../../actions/loginActions'

class SocialAuthActions extends Component {
  constructor(props) {
    super(props);

    this.onsubmitHandler = this.onsubmitHandler.bind(this);
    this.getSocialData = this.getSocialData.bind(this);
    this.consumeEndPoint = this.consumeEndPoint.bind(this);
    this.actionCaller = this.actionCaller.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  onsubmitHandler(access) {
    let tokenData = null;

    if (access.provider === 'twitter') {
      tokenData = {
        'provider': access.provider,
        'access_token': access.accessToken,
        'access_token_secret': access.accessSecret
      };

    }
    else {
      tokenData = {
        'provider': access.provider,
        'access_token': access.accessToken
      };

    }
    this.consumeEndPoint(tokenData);
    return tokenData;
  };

  getSocialData(authProvider, providerName, authorizationType) {
    const dataFetch = this.props;
    auth.signInWithPopup(authProvider).then(function (result) {
      return {
        type: authorizationType,
        payload: {
          authData: {
            provider: providerName,
            accessToken: result.credential.accessToken,
            accessSecret: result.credential.secret
          },
          userDetails: {
            name: result.user.displayName,
            photo: result.user.photoURL,
            email: result.user.email
          }
        }
      };
    }).then((response) => {
      this.actionCaller(response);
    }).catch((err) => {
      dataFetch.fetchFailed(err);
    });
  };

  consumeEndPoint(tokenData){
    const passedData = this.props;
    let url = process.env.REACT_APP_BASE_URL + '/api/social';
    passedData.fetchingCall();
    let fetchData = axios.post(url, tokenData, {
      headers: {
        'Content-Type': 'application/json',},
    })
      .then((response) => {
        passedData.receivedUsers(response.data);
        let username = response.data.user['username'];
        localStorage.setItem('loggedInUserName', username);

        let token = response.data.user['token'];
        localStorage.setItem('jwtToken', token);
        passedData.authenticate(response.data.user);
        passedData.history.push('/');

      })
      .catch((err) => {
        passedData.fetchFailed(err);
        toast.error('🦄 Sorry, Something went wrong. Please try again',
          { position: toast.POSITION.TOP_RIGHT });
      });
    return fetchData;
  };

  actionCaller(response){
    const dataFetch = this.props;
    switch (response.type) {
      case FACEBOOK:
        dataFetch.FacebookAuth(response);
        break;

      case GOOGLE:
        dataFetch.GoogleAuth(response);
        break;

      case TWITTER:
        dataFetch.TwitterAuth(response);
        break;

      default:
        break;
    }
    this.onsubmitHandler(response.payload.authData);
  };

  renderButton(authProvider, providerName, type, btn_name, btn_class, btn_type){
    return (
      <button className={btn_type} onClick={() => this.getSocialData(authProvider, providerName, type)} style={{
        margin: '0.6em'
      }}>
        <i className={btn_class} />
        Continue with {btn_name}
      </button>
    );
  }

  render() {
    return (

              
        <div className='social-container'>
          <h4 id='h4'>{'Welcome to Author\'s Haven'}</h4>
          <div className='row'>
            <div className='vl'>
              <span className='vlinnertext'>or</span>
            </div>
            <div className='col'>
              { this.renderButton(FacebookProvider, 'facebook', FACEBOOK, 'Facebook', 'fa fa-facebook fa-fw', 'btn social facebook')}
              <br/>
              { this.renderButton(GoogleProvider, 'google-oauth2', GOOGLE, 'Google', 'fa fa-google fa-fw', 'btn social google') }
              { this.renderButton(TwitterProvider, 'twitter', TWITTER, 'Twitter', 'fa fa-twitter fa-fw', 'btn social twitter') }
            </div>
            <div className='col'>
              <div className='hide-md-lg'>
                <p>Or sign in manually:</p>
              </div>
              <Login/>
            </div>
          </div>
        </div>

    );
  };
}

export function mapStateToProps(state, myProps) {
  return {
    socialAuth: state.socialAuth,
    auth: state.auth,
    myProps
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    // Authentication functions
    FacebookAuth: (data) => dispatch(SocialFunctions.FacebookAuthentication(data)),
    GoogleAuth: (data) => dispatch(SocialFunctions.GoogleAuthentication(data)),
    TwitterAuth: (data) => dispatch(SocialFunctions.TwitterAuthentication(data)),

    // Messaging functions
    receivedUsers: (data) => dispatch(SocialFunctions.receivedUserData(data)),
    fetchingCall: () => dispatch(SocialFunctions.fetchingCall()),
    fetchFailed: data => dispatch(SocialFunctions.fetchFailed(data)),
    authenticate: (data) => dispatch(LoginActions.setCurrentUser(data)),
  };
}
// eslint-disable-next-line react/prefer-stateless-function
export default connect(mapStateToProps, mapDispatchToProps)(SocialAuthActions);
