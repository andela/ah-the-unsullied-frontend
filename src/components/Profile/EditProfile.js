import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as profileActions from "../../actions/profile/profile";
import { Row, Col, Modal, Input } from "react-materialize";
import ImageUploaoder from "../../utils/ImageUploaoder";
import '../../assets/styles/HomePage.scss';


class ViewProfile extends Component {
  
  constructor(props) {
    console.log("erastus said", props)
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
    actions.EditUserProfile("sammy", data);
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
              className="responsive-img circle"
              onClick={() => this.fileInput.click()}
              height="100px"
              width="100px"
            />
          </Row>
          <Row>
            <form onSubmit={this.handleSubmit}>
              <textarea
                s={12}
                label="Bio"
                name="bio"
                onChange={this.onChange}

                defaultValue={this.props.bio}
              />
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
              <Row>
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
