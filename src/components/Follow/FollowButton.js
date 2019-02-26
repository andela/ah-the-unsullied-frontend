import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { follow } from '../../actions/profile/followActions';

export class FollowButton extends Component {
  followBtn = () => {
    const profile = this.props;
    const followStatus = profile.following;
    const auth = this.props.auth;
    if (auth.isAuthenticated) {
      const profileUser = profile.username;
      const username = auth.user.username;
      if (profileUser !== username) {
        const fbuttn = followStatus ? (
          <div>
            <button onClick={this.followProfile} className="follow">
              UnFollow
            </button>
          </div>
        ) : (
          <div>
            <button onClick={this.followProfile} className="follow">
              Follow
            </button>
          </div>
        );
        return fbuttn;
      }
    }
  };

  followProfile = () => {
    const { username } = this.props;
    this.props.follow(username);
  };

  render() {
    return <div>{this.followBtn()}</div>;
  }
}

FollowButton.propTypes = {
  auth: PropTypes.object.isRequired,
  follow: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};

export const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { follow }
)(FollowButton);
