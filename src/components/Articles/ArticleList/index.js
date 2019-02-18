import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

import { getArticles } from '../../../actions/ArticleActions/actions';
import '../../../assets/css/articles.scss';

class ArticleList extends Component {
  componentDidMount() {
    this.props.getArticles();
  }
  articleCard() {
    var arr = _.values(this.props.articles);
    const articles = arr.map(article => {
      const date = article.created_at.slice(0, 10);

      return (
        <div className="row">
          <div className="col s12 m8">
            <div className="card darken-1">
              <div className="card-content black-text">
                <span id="something" className="card-title teal-text">
                  {article.title}
                </span>
                <p className="paragraph-text grey-text darken-2">
                  {article.description}
                </p>
              </div>
              <p className="author-text grey-text">
                by <span className="teal-text">{article.author.username}</span>
              </p>
              <i className="material-icons">date_range</i>
              <span className="grey-text">
                {date} | {article.read_time}
              </span>
              <div className="card-action">
                <a className="teal-text" href="#!">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return <div>{articles}</div>;
  }
  render() {
    return <div className="">{this.articleCard()}</div>;
  }
}

ArticleList.propTypes = {
  getArticles: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired
};
ArticleList.defaultProps = {
  articles: PropTypes.array.isRequired
};
const mapStateToProps = state => {
  return state.articles;
};
export default withRouter(
  connect(
    mapStateToProps,
    { getArticles }
  )(ArticleList)
);
