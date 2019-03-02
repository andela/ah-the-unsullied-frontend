import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../../assets/css/socialshare.scss';
import { likeArticle, dislikeArticle } from '../../../actions/LikeActions';

export class LikeDislike extends Component {
  state = {
    likestyle: '',
    dislikestyle: ''
  };

  changeColor = (liked, disliked) => {
    if (liked) {
      this.setState({ likestyle: '#35A7FF' });
      this.setState({ dislikestyle: '' });
    } else if (disliked) {
      this.setState({ likestyle: '' });
      this.setState({ dislikestyle: '#35A7FF' });
    } else {
      this.setState({ likestyle: '' });
      this.setState({ dislikestyle: '' });
    }
  };

  componentDidMount() {
    const { liked, disliked } = this.props.article.article.article;
    this.changeColor(liked, disliked);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.likesDislikes !== this.props.likesDislikes) {
      const {
        likes,
        dislikes,
        liked,
        disliked
      } = nextProps.likesDislikes.likesDislikes;
      const { article } = this.props.article.article;
      article['likes'] = likes;
      article['dislikes'] = dislikes;
      this.setState({ articlereducer: article });
      this.changeColor(liked, disliked);
    }
  }

  handleLike = () => {
    const { slug } = this.props.article.article.article;
    this.props.likeArticle(slug);
  };

  handledisLike = () => {
    const { slug } = this.props.article.article.article;
    this.props.dislikeArticle(slug);
  };

  render() {
    // this.setState({ likestyle: 'red' });
    const { likes, dislikes } = this.props.article.article.article;
    const { likestyle, dislikestyle } = this.state;
    return (
      <div className="likebuttons">
        <button
          className="white"
          style={{ color: likestyle }}
          onClick={this.handleLike}
        >
          <i className="fa fa-thumbs-up " aria-hidden="true">
            {likes}
          </i>
        </button>
        <button
          className="white"
          style={{ color: dislikestyle }}
          onClick={this.handledisLike}
        >
          <i className="fa fa-thumbs-down" aria-hidden="true">
            {dislikes}
          </i>
        </button>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  article: state.articlereducer,
  likesDislikes: state.likesDislikes
});

LikeDislike.propTypes = {
  article: PropTypes.object.isRequired,
  likesDislikes: PropTypes.object.isRequired,
  likeArticle: PropTypes.func.isRequired,
  dislikeArticle: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { likeArticle, dislikeArticle }
)(LikeDislike);
