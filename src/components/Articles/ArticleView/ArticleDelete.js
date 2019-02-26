import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {deleteArticles}  from '../../../actions/articles/articleActions';
import { getArticles } from '../../../actions/ArticleActions/actions';
import '../../../assets/css/articleDetail.scss';

export class ArticleDelete extends Component {
  ownerDelete = () => {
    const auth = this.props.auth;
    if (auth.isAuthenticated) {
      const article = this.props.article.article.article;
      const author = article.author;
      const user = auth.user.username;
      if (user === author.username) {
        return (
          <div className="container">
            <p>
              <button className="danger" onClick={this.deleteAction}>
                Delete
              </button>
            </p>
          </div>
        );
      }
    }
  };

  deleteAction = () => {
    const article = this.props.article.article.article;
    const slug = article.slug;
    this.props.deleteArticles(slug);
    getArticles();
    this.props.history.push('/');
  };

  render() {
    return <div>{this.ownerDelete()}</div>;
  }
}

ArticleDelete.propTypes = {
  article: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteArticles: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};



export const mapStateToProps = (state)=> ({
    article: state.articlereducer,
    auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteArticles, getArticles }
)(ArticleDelete);
