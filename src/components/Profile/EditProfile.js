import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Modal, Input } from 'react-materialize';
import PropTypes from 'prop-types';
import {EditUserProfile} from '../../actions/profile/profileActions';
import ImageUploaoder from '../../utils/ImageUploaoder';
import '../../assets/styles/HomePage.scss';

export class ViewProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: props.bio,
      image: props.image
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      bio: e.target.value
    });
  }

  fileHandler = e => {
    const selectFile = e.target.files[0];
    ImageUploaoder({ image: selectFile }).then(res =>
      this.setState({
        image: res.data.secure_url
      })
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    const { bio, image } = this.state;
    const data = {
      bio,
      image
    };
    const username = this.props.auth.user.username;
    this.props.EditUserProfile(username, data);
  };

  ownerUpdate = () => {
    const auth = this.props.auth;
    const profile = this.props;
    const profileName = profile.username;
    const user = auth.user.username;

    if (auth.isAuthenticated) {
      if (user === profileName) {
        return (
          <div>
            <Modal
              header="Profile Edit"
              className="editPage"
              fixedFooter
              trigger={
                <button className="btn waves-effect edit">
                  Edit profile
                  <i className="material-icons right">edit</i>
                </button>
              }
            >
              <Row>
                <img
                  src={this.props.image}
                  className="responsive-img circle editPageProfile"
                  height="100px"
                  width="100px"
                  alt="Avatar"
                />
              </Row>
              <Row>
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="bio">Bio</label>
                  <textarea
                    id="bio"
                    className="materialize-textarea"
                    onChange={this.onChange}
                    defaultValue={this.props.bio}
                  />
                  <Row>
                    <Input
                      s={12}
                      type="file"
                      name="image"
                      label="Upload Image"
                      onChange={this.fileHandler}
                      defaults={12}
                    />
                  </Row>
                  <Row className="left-align">
                    <button className="btn waves-effect edit " type="submit">
                      Update
                    </button>
                  </Row>
                </form>
              </Row>
            </Modal>
          </div>
        );
      }
    }
  };

  render() {
    return <div>{this.ownerUpdate()}</div>;
  }
}

ViewProfile.propTypes = {
  EditUserProfile: PropTypes.func.isRequired,
  bio: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired

};


export const mapStateToProps= state => ({
    UserProfile: state.profile,
    auth: state.auth
})

export default connect(
  mapStateToProps,
  {EditUserProfile}
)(ViewProfile);
