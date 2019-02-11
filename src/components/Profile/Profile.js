import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Preloader, Row } from 'react-materialize';
import ProfileView from './views/viewProfileView';
import * as profileActions from '../../actions/profile/profileActions';

class Profile extends Component {
  state = {
    fetched: false
  };

  componentDidMount = () => {
    const { actions } = this.props;
    const username = this.props.auth.user.username;

    actions.getUserProfile(username).then(() => {
      this.setState({
        fetched: true
      });
    });
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(profileActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    UserProfile: state.profile,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
