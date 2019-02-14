import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as profileActions from '../../actions/profile/profile';
import { Button, Row, Col, Modal, Input, Card } from 'react-materialize';
import ImageUploaoder from '../../utils/ImageUploaoder';
import '../../assets/styles/HomePage.scss';

class ViewProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: '',
      image: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    const { bio, image } = this.state;
    console.log(this.state);
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
    const { name } = e.target;
    this.setState({
      bio: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Modal
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
              height="150px"
              width="150px"
            />
          </Row>
          <Row>
            <form onSubmit={this.handleSubmit}>
              <textarea
                s={12}
                label="Bio"
                name="bio"
                onChange={this.onChange}
                validate
                defaultValue={this.props.bio}
              />
              <Input
                icon="file"
                type="file"
                name="image"
                ref={fileInput => {
                  this.fileInput = fileInput;
                }}
                label="Upload Image"
                onChange={this.fileHandler}
                defaults={12}
              >
                <i className="material-icons">image</i>
              </Input>
              <Input type="submit" />
            </form>
          </Row>
        </Modal>
      </div>
    );
  }
}

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
