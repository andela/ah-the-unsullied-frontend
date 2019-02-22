import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {resetPassword} from '../../../actions/resetPasswordAction';
import { logoutUser } from '../../../actions/loginActions';

class Resetpassword extends Component {
  state ={
    password:'',
    confirm_password:'',
  }
  handleChange = (e)=>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    const new_password= this.state.password;
    const confirm_password= this.state.confirm_password;
    const token= this.props.match.params.token ;
    this.props.resetPassword(new_password,confirm_password, token);
    this.inputPassword.value=null;
    this.inputPassconfirm.value=null;
  }
  render() {
        const passwordErrorMessage = this.props.errors.errors
        ? this.props.errors.errors.password
        : '';
        const confirmpasswordErrorMessage = this.props.errors.errors
        ? this.props.errors.errors.confirm_password
        : '';
        const passwordmismatchMessage = this.props.errors.message
        ? this.props.errors.message
        : '';
        const successmessage = this.props.message
        ? this.props.message['message']
        : '';
        const success = this.props.success
        ? this.props.success
        : '';
        if (success){
            setTimeout(()=>{
            this.props.history.push('/login')
            },3000);
            this.props.logoutUser();
        }
    return (
      <div>
        <div className='homediv'>
          <h2>Enter New Password</h2>
          <form className='emailform' onSubmit={this.handleSubmit}>

            <label htmlFor='password'>Enter new password:</label>

            <input className='input' type='password' id='password' ref={el => this.inputPassword = el}
                   pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).{8,}'
                   title='Must contain at least one number and one uppercase and
                    lowercase letter and a special character, and at least 8 or more characters'
                   onChange={this.handleChange} placeholder='Enter your new password..' require/>

            <label htmlFor='msgerror' style={{ color: 'red' }}>{passwordErrorMessage}</label>
            <br/><br/>
            <label htmlFor='password'>Confirm  password:</label>
            <input type='password' ref={el => this.inputPassconfirm = el}
                   onChange={this.handleChange} id='confirm_password'
                   placeholder='confirm password..' require/>
            <label htmlFor='error' style={{ color: 'red' }}>{confirmpasswordErrorMessage}</label>
            <label htmlFor='mismatch' style={{ color: 'red' }}>{passwordmismatchMessage}</label>
            <div id='loader-div' style = {{display:'none', 'margin':'auto'}} >
              <div className='progress'>
                <div className='indeterminate' />
              </div>
            </div>
            <br/><br/>

            <label htmlFor='pass' style={{ color: 'green' }}>{successmessage}</label>
            <br/>
            <input type='submit' value='Submit'/>
          </form>
        </div>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    ...state,
    message:state.passwordreset.message,
    errors:state.passwordreset.errors,
    success:state.passwordreset.success
  }

}
Resetpassword.propTypes = {
  message: PropTypes.func.isRequired,
  errors: PropTypes.func.isRequired,
  success: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,

    };
export default connect(mapStateToProps, {resetPassword, logoutUser})(Resetpassword)
