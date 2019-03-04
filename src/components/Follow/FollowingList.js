import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../assets/styles/HomePage.scss';
import { followingList } from '../../actions/profile/followActions';

export class FollowingList extends Component {
  componentDidMount() {
    const { username } = this.props;
    this.props.followingList(username);
  }

  render() {
    const list = this.props.Following.following;
    return (
      <div>
        <div>
          <span>
            <span className="number">{list.length}</span>
            Following
          </span>
        </div>
      </div>
    );
  }
}

FollowingList.propTypes = {
  Following: PropTypes.object.isRequired,
  followingList: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};

export const mapStateToProps = state => ({
  auth: state.auth,
  Following: state.following
});

export default connect(
  mapStateToProps,
  { followingList }
)(FollowingList);
