import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Preloader, Row } from 'react-materialize';
import ProfileView from './views/viewProfileView';
import { getUserProfile } from '../../actions/profile/profileActions';

export class Profile extends Component {
  state = {
    fetched: false
  };

  componentDidMount = () => {
    const username = this.props.match.params.username;
    this.props.getUserProfile(username).then(() => {
      this.setState({
        fetched: true
      });
    });
    const auth = this.props.auth.isAuthenticated
    if(!auth){
      this.props.history.push('/login')
    }
  };

  render() {
    if (!this.state.fetched) {
      return (
        <div>
          <Row>
            <Col s={12}>
              <Preloader size="big" />
            </Col>
          </Row>
        </div>
      );
    } else {
      const { profile } = this.props.UserProfile;

      return (
        <div>
          <ProfileView profile={profile} />
        </div>
      );
    }
  }
}

Profile.propTypes = {
  UserProfile: PropTypes.object.isRequired,
  getUserProfile: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

export const mapStateToProps = state => ({
  UserProfile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getUserProfile }
)(Profile);
