import React, { Component } from "react";
import ProfileView from "./views/profile";
import * as profileActions from "../../actions/profile/profile";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Profile extends Component {
  state = {
    fetched : false
  }
  componentDidMount= () => {
    console.log(this.props)
    const { actions } = this.props;
    actions.getUserProfile('sammy').then(() =>{
      this.setState({
        fetched:true
      })
    });
   
  }
 
  render() {
    if(!this.state.fetched){
      return(
        <div>Loading...</div>
      )
    }
    else{
    const {profile} = this.props.UserProfile
  
    return (
      <div>
        <ProfileView profile={profile}/>
      </div>
    );}
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
)(Profile);
