import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as articleActions from '../../../actions/articles/articleActions';
import { getArticles } from '../../../actions/ArticleActions/actions';
import '../../../assets/css/articleDetail.scss';

class ArticleDelete extends Component {
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
    const { actions } = this.props;
    actions.deleteArticles(slug);
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
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(articleActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    article: state.articlereducer,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  { mapDispatchToProps, getArticles }
)(ArticleDelete);
