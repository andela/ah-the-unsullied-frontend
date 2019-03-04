import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Col, CardTitle, Row } from 'react-materialize';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {followingList} from '../../actions/profile/followActions';
import '../../assets/css/articles.scss';
import '../../assets/styles/HomePage.scss';
import Nav from '../common/nav/index';

export class FollowingListView extends Component {
  componentDidMount() {
    const username = this.props.match.params.username;
    this.props.followingList(username)
  }

  render() {
    const list = this.props.Following.following;
    const Fusername = this.props.match.params.username;
    const user_details = list.map(item => {
      const username = item.username
      return (
        <div>
          <Row>
            <Col m={7} s={12}>
              <Card
                horizontal
                header={<CardTitle image={item.image} />}
              >
                <Link
                  to={{
                    pathname: `/profile/${username}`,
                    username: { username }
                  }}
                >
                  <b>{item.username}</b>
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
          <h3> {Fusername} follows </h3>
        </div>

        {user_details}
      </div>
    );
  }
}

FollowingListView.propTypes = {
  Following: PropTypes.object.isRequired,
  followingList: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired, 
  match: PropTypes.object.isRequired
};


export function mapStateToProps(state) {
  return {
    Following: state.following,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
 {followingList}
)(FollowingListView);
