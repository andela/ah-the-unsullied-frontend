import React, {Component} from 'react';

class ErrorPage404 extends Component{
  render() {
    const errPage = (
      <div className="bgimg">
        <div className="middle">
          <h1>404</h1>
          <hr/>
          <p>OOPS!</p>
          <p>The page you're trying to reach doesn't exist</p>
          <a href="/">
          <button id="redirect">Head back to the Haven</button>
          </a>
        </div>
      </div>
    );
    return(
      <div>
        {errPage}
      </div>

    )
  }
}

export default ErrorPage404
