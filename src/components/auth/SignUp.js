import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import '../../assets/css/signup.scss';

class SignUp extends Component {
  state = {
    username: ' ',
    email: '',
    password: ' ',
    errors: {},
    loaded: true,
    success: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.success) {
      nextProps.history.push('/login');
    } else {
      if (nextProps.errors) {
        this.setState({ loaded: true });

        const emailErrorMessage = nextProps.errors.errors.email
          ? nextProps.errors.errors.email[0]
          : null;

        const usernameErrorMessage = nextProps.errors.errors.username
          ? nextProps.errors.errors.username[0]
          : null;

        const passwordErrorMessage = nextProps.errors.errors.password
          ? nextProps.errors.errors.password[0]
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
  }

  handleChange = e => {
    this.setState({
      errors: {},
      [e.target.name]: e.target.value
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
      <div className="signup-container">
        <h4 id="h4">{'Welcome to Author\'s Haven'}</h4>
        <form onSubmit={this.handleSubmit} className="center-align col s12">
          <div>
            <i className="large material-icons prefix" id="signup-bot">person_outline</i>
            <h5 className="sign-up-text">Sign Up</h5>
          </div>

          <p style={{ color: 'red' }}>{email}</p>
          <div className="row center-align">
            <div className="input-field col s10">
              <i className="tiny material-icons prefix">email_outline</i>
              <label htmlFor="email">Email</label>
              <input
                id="icon_prefix"
                type="email"
                name="email"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <p style={{ color: 'red' }}>{username}</p>
          <div className="row center-align">
            <div className="input-field col s10">
              <i className="tiny material-icons prefix">account_circle</i>
              <label htmlFor="username">Username</label>
              <input
                id="icon_prefix"
                type="text"
                name="username"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <p style={{ color: 'red' }}>{password}</p>
          <div className="row center-align">
            <div className="input-field col s10 ">
              <i className="tiny material-icons prefix">lock_outline</i>
              <label htmlFor="password">Password</label>
              <input
                id="icon_prefix"
                type="password"
                name="password"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <button type="submit" className="btn" id="btn-register">
              Register
            </button>
          </div>
          <p id="already-member">
            Already have an account? <a href="/login"> Sign In</a>
          </p>
          <div className="loader">
            <Loader loaded={this.state.loaded} />
          </div>
        </form>
      </div>
    );
  }
}
export const mapStateToProps = state => {
  let errors;
  if (state.signup) {
    errors = state.signup.errors;
  }
  return {
    errors: errors,
    signup: state.signup,
    success: state.signup.success
  };
};
SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  success: PropTypes.object.isRequired
};
SignUp.defaultProps = { errors: {} };

export default connect(
  mapStateToProps,
  { registerUser }
)(SignUp);
