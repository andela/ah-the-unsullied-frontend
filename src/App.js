import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateCount } from './actions/button';
import './app.scss';
import Home from './components/home/home'; 
import Login from './components/login/login';
import Navigation from './components/common/nav/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });

    this.props.updateCount(this.state.count);
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Add count</button>
        <Router>
          <div className="App">
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact Strict />
              <Route path="/login" component={Login} exact />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  updateCount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  count: state.count
});
export default connect(
  mapStateToProps,
  { updateCount }
)(App);
