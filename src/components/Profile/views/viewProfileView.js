import React from 'react';
import EditProfile from '../EditProfile';
import Nav from '../../common/nav';

const profile = props => {
  const { profile } = props;
  console.log(profile);

  const getImage = () => {
    if (!profile.image) {
      const new_image = require('../../../assets/images/profile.png');
      return new_image;
    } else {
      return profile.image;
    }
  };

  return (
    <>
      <Nav image={getImage()} />
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
                        src={getImage()}
                        className="responsive-img circle"
                        height="200px"
                        width="200px"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div className="col s8">
                    <div className="username">{profile.username}</div>
                    <ul className="statistics">
                      <li className="artStat">
                        <span>
                          <span className="number">0</span>
                          Articles
                        </span>
                      </li>
                      <li className="artStat">
                        <span>
                          <span className="number">10</span>
                          Following
                        </span>
                      </li>
                      <li className="artStat">
                        <span>
                          <span className="number">30</span>
                          Followers
                        </span>
                      </li>
                    </ul>
                    <div>Bio</div>
                    <div className="bio">{profile.bio}</div>
                  </div>
                  <div className=" col s2">
                    <EditProfile {...profile} />
                  </div>
                </div>
              </div>
              <div className="card-action">
                <a href="/">Articles</a>
                <a href="/">Highlights</a>
                <a href="/">Followers</a>
                <a href="/">Following</a>
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
