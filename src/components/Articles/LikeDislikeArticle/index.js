import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../assets/css/socialshare.scss';
import { likeArticle, dislikeArticle } from '../../../actions/LikeActions';

class LikeDislike extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.likesDislikes !== this.props.likesDislikes) {
      const { likes, dislikes } = nextProps.likesDislikes.likesDislikes;
      const { article } = this.props.article.article;
      article['likes'] = likes;
      article['dislikes'] = dislikes;
      this.setState({ articlereducer: article });
    }
  }

  handleLike = e => {
    const { slug } = this.props.article.article.article;
    this.props.likeArticle(slug);
  };

  handledisLike = e => {
    const { slug } = this.props.article.article.article;
    this.props.dislikeArticle(slug);
  };

  render() {
    const { likes, dislikes } = this.props.article.article.article;
    return (
      <div className="likebuttons">
        <button className="white" onClick={this.handleLike}>
          <i className="fa fa-thumbs-up " aria-hidden="true">
            {likes}
          </i>
        </button>
        <button className="white" onClick={this.handledisLike}>
          <i className="fa fa-thumbs-down" aria-hidden="true">
            {dislikes}
          </i>
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    article: state.articlereducer,
    likesDislikes: state.likesDislikes
  };
}
export default connect(
  mapStateToProps,
  { likeArticle, dislikeArticle }
)(LikeDislike);
