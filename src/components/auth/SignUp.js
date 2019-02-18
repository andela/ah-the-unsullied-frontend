import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-materialize';
import { registerUser } from '../../actions/authActions';

class SignUp extends Component {
  state = {
    username: ' ',
    email: '',
    password: ' ',
    errors: {},
    loaded: true,
    errorNoMatch: null
  };

  componentWillReceiveProps(nextprops) {
    if (nextprops.errors) {
      this.setState({ loaded: true });

      const emailErrorMessage = nextprops.errors.errors.email
        ? nextprops.errors.errors.email[0]
        : null;

      const usernameErrorMessage = nextprops.errors.errors.username
        ? nextprops.errors.errors.username[0]
        : null;

      const passwordErrorMessage = nextprops.errors.errors.password
        ? nextprops.errors.errors.password[0]
        : null;

      this.setState({
        errors: {
          ...this.state.errors,
          email: emailErrorMessage,
          username: usernameErrorMessage,
          password: passwordErrorMessage
        }
      });
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newUserData = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    };
    this.setState({ loaded: false });
    this.props.registerUser(newUserData);
  };

  render() {
    const { email, username, password } = this.state.errors;

    return (
      <div className=" ">
        <Modal
          id="fee"
          style={{ display: 'none' }}
          trigger={<Button id="signup">Register</Button>}
        >
          <h5 className="center-align">Welcome to Author's Haven</h5>
          <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
              <h5 className="center-align">Sign Up</h5>
              <p style={{ color: 'red' }}>{username}</p>
              <div className="input-field">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={this.handleChange} />
              </div>
              <p style={{ color: 'red' }}>{email}</p>
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange} />
              </div>
              <p style={{ color: 'red' }}>{password}</p>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-field">
                <button type="submit" className="btn pink lighten-1 z-depth-0">
                  Register
                </button>
              </div>
              <p>
                Already have an account? <a href="/login"> Sign In</a>
              </p>
              <div className="loader">
                <Loader loaded={this.state.loaded} />
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let errors;
  if (state.signup) {
    errors = state.signup.errors;
  }
  return {
    signup: state.signup
  };
};

SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

SignUp.defaultProps = { errors: {} };

export default connect(
  mapStateToProps,
  { registerUser }
)(SignUp);

