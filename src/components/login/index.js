import React, { Component } from 'react';
import { Modal } from 'react-materialize';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'react-loader';
import { withRouter } from 'react-router-dom';

import { loginUser } from '../../actions/loginActions';
import '../../assets/css/login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loaded: true
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      nextProps.history.push('/');
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
      this.setState({ loaded: true });
      return;
    }


  }
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
    this.setState({ loaded: false });
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    return (
      <div className="modal-unique">
        <Modal
          id="foo"
          style={{ display: 'none' }}
          header="Login"
          trigger={
            <button className='waves-light btn' id='login' >
              <i className='material-icons left'>email</i>
              Login with email
            </button>
          }
        >

          <form onSubmit={this.onSubmit}>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                onChange={this.onChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={this.onChange}
                required
              />
            </div>
            <div className="input-field">
              <button id="loginBtn" className="btn pink lighten-1 z-depth-0">
                Login
              </button>
            </div>
          </form>
          <a className="pass-reset" href="/password-reset">
            <div className="loader">
              <Loader loaded={this.state.loaded} />
            </div>
            Forgot Password?
          </a>
          <p>
            Dont have an account? <a href="#!"> SignUp</a>
          </p>
        </Modal>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,

};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default withRouter(
  connect(
    mapStateToProps,
    { loginUser }
  )(Login)
);
