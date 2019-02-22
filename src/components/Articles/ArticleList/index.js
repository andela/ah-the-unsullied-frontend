import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import _ from 'lodash';
import Pagination from 'react-js-pagination';

import { getArticles } from '../../../actions/ArticleActions/actions';
import '../../../assets/css/articles.scss';

class ArticleList extends Component {
  constructor() {
    super();
    this.state = {
      activePage: 1
    };
  }
  componentDidMount() {
    let arr = _.values(this.props.articles['results']);
    if(arr.length === 0){
    this.props.getArticles();
    }
  }

  handlePageChange = pageNumber => {
    this.props.getArticles(pageNumber);
    this.setState({ activePage: pageNumber });
  };
  articleCard() {
    const arr = _.values(this.props.articles['results']);
    const articles = arr.map(article => {
    const date = article.created_at.slice(0, 10);
    const slug = article.slug;

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
              
            
                <Link
                  to={{
                    pathname: `/article/${slug}`,
                    slug: { slug },
                    single: { ...article }
                  }}
                >
                  View
                </Link>
        
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        {articles}
        {this.props.articles['count'] > 10 && (
          <div id="pagination">
            <Pagination
              prevPageText="prev"
              nextPageText="next"
              firstPageText="first"
              lastPageText="last"
              activePage={this.state.activePage}
              itemsCountPerPage={10}
              totalItemsCount={this.props.articles['count']}
              pageRangeDisplayed={Math.ceil(this.props.articles['count'] / 10)}
              onChange={this.handlePageChange}
            />
          </div>
        )}
      </div>
    );
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
