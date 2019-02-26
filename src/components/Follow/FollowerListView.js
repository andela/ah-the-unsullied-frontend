import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Col, CardTitle, Row } from 'react-materialize';
import { Link } from 'react-router-dom';
import Nav from '../common/nav/index';
import  { followersList } from '../../actions/profile/followActions';

export class FollowerListView extends Component {
  componentDidMount() {
    const user = this.props.match.params.username;
    this.props.followersList(user)
  }

  render() {
    const list = this.props.Followers.followers;
    const Fusername = this.props.match.params.username;
    const user_details = list.map(item => {
      const username = item.username
      return (
        <div>
          <Row>
            <Col m={7} s={12}>
              <Card horizontal header={<CardTitle image={item.image} />}>
                <Link
                  to={{
                    pathname: `/profile/${username}`,
                    username: { username }
                  }}
                >
                  <b>{username}</b>
                </Link>
                <div className="bio">
                  <p>{item.bio}</p>
                </div>
                <div className="follow" />
              </Card>
            </Col>
          </Row>
        </div>
      );
    });
    return (
      <div>
        <Nav />
        <div className="container">
          <h3> {Fusername} Is followed by </h3>
        </div>

        {user_details}
      </div>
    );
  }
}

FollowerListView.propTypes = {
  Followers: PropTypes.object.isRequired,
  followersList: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired
  
};

export const mapStateToProps = state =>({
  auth: state.auth,
  Followers: state.followers,
})

export default connect(
  mapStateToProps,
  {followersList}
)(FollowerListView);
