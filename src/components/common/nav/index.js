import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import M from 'materialize-css';

import '../../../assets/css/nav.scss';
import Logo from '../../../assets/images/Logo.png';
import { logoutUser } from '../../../actions/loginActions';
import {
  getSearchedArticles,
  getArticles
} from '../../../actions/ArticleActions/actions';

class Nav extends Component {
  state = {
    search: null,
    value: null
  };
  componentDidMount() {
    let elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });
    localStorage.setItem('auth', this.props.auth.isAuthenticated)
  }
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.go('/');
  }
  onEnterkeypress = e => {
    if (e.key === 'Enter' && this.state.search !== null) {
      const searchtext = this.state.search;
      const filterby = this.state.value;
      this.props.history.push('/');
      this.props.getSearchedArticles(searchtext, filterby);
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  loadArticles = e => {
    this.props.getArticles();
  };
  render() {
    const img = require('../../../assets/images/profile.png');
    const isAuthenticated = localStorage.getItem('auth')
    const { user } = this.props.auth
    const username = localStorage.getItem('username')
    const common = (
      <ul className="right hide-on-med-and-down">
        <li>
          <div className="center row">
            <div className="col s12 ">
              <div className="row" id="topbarsearch">
                <div className="input-field col s6 s12 red-text">
                  <i className="tiny material-icons prefix" id="search-bot">
                    search
                  </i>
                  <input
                    type="text"
                    placeholder="search"
                    id="search"
                    onKeyPress={this.onEnterkeypress}
                    className="autocomplete black-text"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="center row">
            <div className="col s12 ">
              <div className="row" id="topbarsearch">
                <div className="input-field col s6 s12 black-text">
                  <select
                    id="value"
                    className="browser-default"
                    onChange={this.handleChange}
                  >
                    <option value="" disabled selected>
                      Filter By
                    </option>
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                    <option value="tag_list">Tag</option>
                    <option value="search">All</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    );
    const authLinks = (
      <ul className="right hide-on-med-and-down prof">
        <a className="dropdown-trigger btn" href="/" data-target="dropdown1">
          {username}{' '}
          <i className="material-icons left prof">arrow_drop_down</i>
        </a>
        <li>{common}</li>
        <ul id="dropdown1" className="dropdown-content">
          <li>
            <NavLink to="/create-article">Create Article</NavLink>
          </li>
          <li>
            <Link
              to={{
                pathname: `/profile/${username}`,
                username: { username }
              }}
            >
              profile
            </Link>
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
        <li>{common}</li>
        <li>
          <a href="/login" className="btn white indigo-text">
            Login
          </a>
        </li>

        <li>
          <a href="/signup" className="btn #9BC995 z-depth-0">
            Sign Up
          </a>
        </li>
      </ul>
    );

    return (
      <div>
        <div className="navbar-fixed">
          <nav className="nav-wrapper">
            <div className="container">
              <div>
                <NavLink to="/">
                  <img
                    src={Logo}
                    className="img-responsive"
                    alt="++ah-unsullied"
                    onClick={this.loadArticles}
                  />
                </NavLink>
              </div>
              <div className="v1" />
              <div id="emboss">{"Author's Haven"}</div>

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
  auth: PropTypes.object.isRequired,
  getSearchedArticles: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { logoutUser, getSearchedArticles, getArticles }
  )(Nav)
);
