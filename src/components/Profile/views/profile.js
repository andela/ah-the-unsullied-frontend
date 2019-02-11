import React from 'react';
import { Card, CardTitle, Row, Col } from 'react-materialize';

const profile = props => {
  const { profile } = props;
  return (
    <div className="row">
      <div className="col s12">
        <div className="profile">
          <div className="card profile">
            <div className="card-content">
              <div className="row">
                <div className="col s2">
                  <div />
                  <div className="profile_image">
                    <img
                      src={profile.image}
                      className="responsive-img"
                      height="200px"
                      width="200px"
                    />
                  </div>
                </div>
                <div className="bio col s8">
                  <div className="username">{profile.username}</div>
                  <div className="bio col s4">{profile.bio}</div>
                </div>
                <div className="bio col s2">
                  <button className="btn waves-effect edit">
                    Edit profile
                    <i className="material-icons right">edit</i>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-action">
              <a href="#">articles</a>
              <a href="#">highlights</a>
              <a href="#">Followers</a>
              <a href="#">Following</a>
              <a href="#">Ratings</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default profile;
