import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../assets/styles/HomePage.scss';
import  { followersList } from '../../actions/profile/followActions';

export class FollowersList extends Component {
  state = {
    loading: false
  };

  componentDidMount() {
    const { username } = this.props;
    this.props.followersList(username)
}

getFollowList(){
  const list = this.props.Followers.followers; 
    return (
      <div>
        <div>
          <span>
            <span className="number">{list.length}</span>
            Followers
          </span>
        </div>
      </div>
    );
}


  render() {
     return <div>{this.getFollowList()}</div>
    }
  }

FollowersList.propTypes = {
  Followers: PropTypes.object.isRequired,
  followersList: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};


export const mapStateToProps = state =>({
  auth: state.auth,
  Followers: state.followers,
})


export default connect(
  mapStateToProps,
  {followersList}
)(FollowersList);
