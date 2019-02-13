import React, { Component } from 'react';
import { connect } from 'react-redux';
import { verifyUser } from '../../actions/verification';
import { Link } from 'react-router-dom';

class Verification extends Component {
  state = {
    errors: {}
  };

  componentDidMount() {
    const { verifyUser: verifyAction } = this.props;
    const token = this.props.match.params.token;
    const pk = this.props.match.params.pk;

    verifyAction({ pk, token });
  }

  componentWillReceiveProps(nextprops) {}

  render() {
    const response = this.props.verify;
    return (
      <div className="container ">
        <div className="row valign-wrapper center-align">
          <div className="col s6 offset-s3 valign">
            <div className="card grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Verification</span>
                {response.errors ? (
                  <p style={{ color: 'red' }}>{response.errors.data}</p>
                ) : null}
                {response.data ? (
                  <p style={{ color: 'white' }}>{response.data}</p>
                ) : null}
              </div>
              <div className="card-action">
                <p>
                  Proceed to login into your account <Link to="/">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    verify: state.verifyEmail
  };
};
export default connect(
  mapStateToProps,
  { verifyUser }
)(Verification);
