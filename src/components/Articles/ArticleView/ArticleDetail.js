import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Preloader, Row } from 'react-materialize';
import {getArticle}from '../../../actions/articles/articleActions';
import ArticleView from './views/ArticleView';
import ArticleDelete from './ArticleDelete';
import Nav from '../../common/nav';
import SocialShare from '../../../components/SocialSharing/shareArticle';
import Rating from '../../../components/Rating/RatingComponent';
import LikeDislike from '../LikeDislikeArticle';
import BookmarkArticle from './BookmarkArticle';

export class ArticleDetail extends Component {
  state = {
    fetched: false
  };

  componentDidMount = () => {
    const slug = this.props.match.params.slug;
    this.props.getArticle(slug).then(() => {
      this.setState({
        fetched: true
      });
    });
  };

  render() {
    if (!this.state.fetched) {
      return (
        <div className="container">
          <Row>
            <Col s={5}>
              <Preloader size="big" />
            </Col>
          </Row>
        </div>
      );
    } else {
      const slug = this.props.article.article.article.slug;
      const rating = this.props.article.article.article.rating;
      const shareTitle = this.props.article.article.article.title;
      const shareSlug = this.props.match.url;
      return (
        <div>
          <Nav />
          <BookmarkArticle {...this.props} />
          <ArticleView {...this.props} />
          <Rating slug={slug} rating={rating} />
          <ArticleDelete {...this.props} />
          <LikeDislike {...this.props} />
          <SocialShare title={shareTitle} slug={shareSlug} />
        </div>
      );
    }
  }
}



ArticleDetail.propTypes = {
  getArticles: PropTypes.func.isRequired,
  getArticle: PropTypes.func.isRequired,
  match: PropTypes.func.isRequired,
  article: PropTypes.func.isRequired
};

export const mapStateToProps = state => ({
    article: state.articlereducer,
    auth: state.auth
})

export default connect(
  mapStateToProps,
 {getArticle}
)(ArticleDetail);
