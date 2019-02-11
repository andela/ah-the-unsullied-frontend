import React from 'react'; 
import {Card, CardTitle, Row, Col, Modal, Input} from 'react-materialize'
import Button from 'react-materialize/lib/Button';
import EditProfile from '../ViewProfile';
import Icon from 'react-materialize/lib/Icon';
import MaterialIcon, {colorPalette} from 'material-icons-react';


const profile = (props) =>{
  
  const { profile } = props

  const getImage = () => {
    if(!profile.image){
      return (<Icon>user_circle</Icon>)
    }else{
      return( <img src = { profile.image } 
        className="responsive-img circle" 
        height="100px" width="100px"/>)
    }
  }
    return(
      <>
        <div className="container">
          <div className="row">
            <div className="card">
              <div className="card-image">
                <img  alt="" />
                <span className="card-title"><a className="green-text" ></a></span>
                </div>
              <div className="card-content">
          <div className="row">
          <div className="col s={6}">
            { getImage() }

          </div> 
            <div className="col s={6}">
            <p><b>{profile.username}</b></p>
            <br></br>
            <p>{profile.bio}</p>
            <EditProfile {...profile}/>
          </div> 
          <div>
          </div>
          </div>
            </div>
            <br />
            <br />
          </div>
          </div>
        </div>
      </>
      );
};
export default profile;