import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../../app.scss';
import {sendEmail} from '../../../actions/resetPasswordAction';
import { logoutUser } from '../../../actions/loginActions';

export class Resetemail extends Component {

    state ={
        email:'',
        reply:null,
        invalidemail:null
    };
    handleChange = (e)=>{
        this.setState({
            email: e.target.value
        })
    };
    handleSubmit = (e)=>{
        e.preventDefault();
        this.setState({
                    reply:null,
                });
        const user_email= this.state.email;
        this.props.sendEmail(user_email);
    };
  render() {
    const emailsendsuccess = this.props.sendemail
        ? this.props.sendemail
        : '';
    const invalidemail = this.props.sendemailerr.errors
    ? this.props.sendemailerr.errors.email
    : '';
    const unregisteredemail = this.props.sendemailerr ? this.props.sendemailerr.message  : '';
    const success = this.props.success
        ? this.props.success
        : '';
    if (success){
        setTimeout(()=>{
        this.props.history.push('/login')
        },1000);
        this.props.logoutUser();
    }
    return (
        <div>
        <div className='homediv'>
        <h2>Password reset</h2>
       <form className='emailform' onSubmit={this.handleSubmit}>
            <label htmlFor='email'>Enter email:</label>

            <input className='input' type='email' ref={el => this.inputEmail = el}
            onChange={this.handleChange} placeholder='Your email..' require/>

                    <div id='loader-div' style = {{display:'none', 'margin':'auto'}} className='preloader-wrapper small active'>
                        <div className='spinner-layer spinner-green-only'>
                        <div className='circle-clipper left'>
                            <div className='circle' />
                        </div><div className='gap-patch'>
                            <div className='circle' />
                        </div><div className='circle-clipper right'>
                            <div className='circle' />
                        </div>
                        </div>
                    </div>
            <br/>
            <label htmlFor='sucess' style={{ color: 'green' }}>{emailsendsuccess}</label>
            <label htmlFor='invalid' style={{ color: 'red' }}>{invalidemail}</label>
            <label htmlFor='unregisterd' style={{ color: 'red' }}>{unregisteredemail}</label>
            <br/>
            <input type='submit' value='Submit'/>
        </form>

      </div></div>
    )
  }
}
export const mapStateToProps=(thestate)=>{
    return{
        sendemail:thestate.passwordreset.sendemail,
        sendemailerr:thestate.passwordreset.sendemailerr,
        success:thestate.passwordreset.success,
    }
};
Resetemail.propTypes = {
    sendemailerr: PropTypes.func.isRequired,
    sendemail: PropTypes.func.isRequired,
    success: PropTypes.func.isRequired,
    sendEmail: PropTypes.func.isRequired,
    history: PropTypes.func.isRequired,

    };
export default connect(mapStateToProps, {sendEmail, logoutUser})(Resetemail);

