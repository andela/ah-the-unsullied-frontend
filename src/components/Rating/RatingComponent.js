import React, {Component} from 'react';
import Rating from  'react-star-rating-lite';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
  postRating,
  getAverageRating
} from '../../actions/Rating/ratingActions';

export class ArticleRating extends Component{

  componentDidMount() {
    const {getAverageRating} = this.props;
    const {slug} = this.props;
    getAverageRating(slug)

  }

   onClickHandler = (ratingValue) => {
    const ratingData = {
      'rating': ratingValue
    };

    const {slug} = this.props;
    const {postRating} = this.props;
    postRating(ratingData, slug);
};

  render() {
  const { rating } = this.props;
  const { auth } = this.props;
  const { article } =this.props;
  const articleAuthor = article.article.article.author.username;
  if(!auth.isAuthenticated){
    return(
      <div className="container">
        <p> Please login to rate this article</p>
      <Rating
        value={rating}
        color="orange"
        weight="25"
        readonly
      />
      </div>
    )
  }
  else if(articleAuthor === auth.user.username){
    return (
      <div className="container">
        <p> Average rating:</p>
        <Rating
          value={rating}
          color="orange"
          weight="25"
          readonly
        />
      </div>
    )
  }
  else {
    return (
      <div className="container">
      <Rating
        value={rating}
        color="orange"
        weight="25"
        onClick={this.onClickHandler}
      />
      </div>
    )
  }
}
}

ArticleRating.propTypes = {
  getAverageRating: PropTypes.func.isRequired,
  rating: PropTypes.object.isRequired,
  postRating: PropTypes.func.isRequired,
  slug: PropTypes.object.isRequired
};

export const mapStateToProps = state => {
  return{
    auth: state.auth,
    article: state.articlereducer,
    ratingError: state.rating
  }
};
export default connect(mapStateToProps, { getAverageRating, postRating })(ArticleRating);
