import React from 'react';
import { Row, Col } from 'react-materialize';
import { Link } from 'react-router-dom';
import EditProfile from '../EditProfile';
import Nav from '../../common/nav';
import FollowButton from '../../Follow/FollowButton';
import FollowingList from '../../Follow/FollowingList';
import FollowersList from '../../Follow/FollowersList';

export const profile = props => {
  const { profile } = props;
  const username = profile.username;

  return (
    <>
      <Nav />
      <div className="row">
        <div className="col s1" />
        <div className="col s10">
          <div className="profile">
            <div className="card profile">
              <div className="card-content">
                <div className="row">
                  <div className="col s2">
                    <div />
                    <div className="profile_image">
                      <img
                        src={profile.image}
                        className="responsive-img circle"
                        height="200px"
                        width="200px"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div className="col s8">
                    <div className="username">{profile.username}</div>
                    <Row>
                      <Col s={2}>
                        <span>
                          <span className="number">0</span>
                          Articles
                        </span>
                      </Col>
                      <Col s={2}>
                        <FollowingList {...profile} />
                      </Col>
                      <Col s={2}>
                        <FollowersList {...profile} />
                      </Col>
                    </Row>

                    <div>Bio</div>
                    <div className="bio">{profile.bio}</div>
                  </div>
                  <div className=" col s2">
                    <EditProfile {...profile} />
                    <FollowButton {...profile} />
                  </div>
                </div>
              </div>
              <div className="card-action">
                <a href="/">Articles</a>
                <a href="/">Highlights</a>
                <Link
                  to={{
                    pathname: `/${username}/followers`,
                    username: { username }
                  }}
                >
                  followers
                </Link>
                <Link
                  to={{
                    pathname: `/${username}/following`,
                    username: { username }
                  }}
                >
                  following
                </Link>

                <a href="/">Ratings</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col s1" />
      </div>
    </>
  );
};

export default profile;
