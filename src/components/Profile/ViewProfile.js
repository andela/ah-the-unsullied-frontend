import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Modal, Input } from 'react-materialize';
import * as profileActions from '../../actions/profile/profile';
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
            <button className="btn waves-effect edit">Edit profile</button>
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
                type="file"
                ref={fileInput => {
                  this.fileInput = fileInput;
                }}
                onChange={this.fileHandler}
                defaults={12}
              />
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
