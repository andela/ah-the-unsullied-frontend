import React, { Component } from 'react';
import '../../../assets/css/errorBoundary.scss';
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    console.log(
      'Error and info is',
      error.toString(),
      ' and info \n',
      info.componentStack
    );
    this.setState({ error, info, hasError: true });
  }

  render() {
    let { hasError } = this.state;
    if (hasError === true) {
      return (
        <div className='error-div'>
          <div className='column'>
            <p>
              <b>Whoops! </b>
              <br />
              The Haven is untidy. <br />
              We are looking into what caused the problem and will fix it as we
              clean up the house :)
              <br />
              <br />
              <a href='/'>
                <button className='btn'>Head back to the Haven</button>
              </a>
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
