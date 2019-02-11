import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-materialize';
import '../../../assets/css/nav.scss';
import Logo from '../../../assets/images/Logo.png';
import { logoutUser } from '../../../actions/loginActions';
import { withRouter } from 'react-router-dom';
import M from 'materialize-css';

class Nav extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push('/');
  }

  componentDidMount() {
    let elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });
  }

  render() {
    const img = require('../../../assets/images/profile.png');
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <ul className="right hide-on-med-and-down prof">
        <a className="dropdown-trigger btn" href="/" data-target="dropdown1">
          Actions <i className="material-icons left prof">arrow_drop_down</i>
        </a>

        <ul id="dropdown1" className="dropdown-content">
          <li>
            <a href="#!">Create Article</a>
          </li>
          <li>
            <a href="/profile">profile</a>
          </li>
          <li>
            <a href="/" onClick={this.onLogoutClick.bind(this)}>
              SignOut
            </a>
          </li>
        </ul>
      </ul>
    );

    const guestLinks = (
      <ul className="right hide-on-med-and-down">
        <li>
          <a href="/login" className="btn white indigo-text">
            Login
          </a>
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

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser }
  )(Nav)
);
