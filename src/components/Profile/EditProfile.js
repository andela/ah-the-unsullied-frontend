import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Modal, Input } from 'react-materialize';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as profileActions from '../../actions/profile/profile';
import ImageUploaoder from '../../utils/ImageUploaoder';
import '../../assets/styles/HomePage.scss';

class ViewProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: "",
      image: props.image
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    const { bio, image } = this.state;
    const data = {
      bio,
      image
    };
    const { actions } = this.props;
    actions.EditUserProfile('sammy', data);
  };

  fileHandler = e => {
    const selectFile = e.target.files[0];
    ImageUploaoder({ image: selectFile }).then(res =>
      this.setState({
        image: res.data.secure_url
      })
    );
  };

  onChange(e) {
    this.setState({
      bio: e.target.value
    });
  }

  render() {
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
              onClick={() => this.fileInput.click()}
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
                  ref={fileInput => {
                    this.fileInput = fileInput;
                  }}
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

ViewProfile.propTypes = {
  actions: PropTypes.func.isRequired,
  bio: PropTypes.string.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(profileActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    UserProfile: state.profile
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewProfile);
