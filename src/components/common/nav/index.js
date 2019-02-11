import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-materialize';
import '../../../assets/css/nav.scss';
import Logo from '../../../assets/images/Logo.png';
import { logoutUser } from '../../../actions/loginActions';

class Nav extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <ul className="right hide-on-med-and-down">
        <li>
          <Button onClick={this.onLogoutClick.bind(this)}>Logout</Button>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="right hide-on-med-and-down">
        <li>
          <a href="/login" className="btn white indigo-text">Login</a>
        </li>
        <li>
          <Button>SignUp</Button>
        </li>
      </ul>
    );

    return (
      <div>
        <div className="navbar-fixed">
          <nav className="nav-wrapper">
            <div className="container">
              <div>
                <img
                  src={Logo}
                  className="img-responsive"
                  alt="++ah-unsullied"
                />
              </div>
              <div className="v1" />
              <div id="emboss">{'Author\'s Haven'}</div>
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

Nav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Nav);
