import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../assets/css/socialshare.scss';
import {
  bookmarkArticle,
  getBookmarkArticles
} from '../../../actions/BookmarkActions';

getBookmarkArticles();

export class BookmarkArticle extends Component {
  state = {
    bookmarked: '#cfcfd1'
  };
  componentWillMount() {
    this.props.getBookmarkArticles();

    this.setState({ bookmarked: '#cfcfd1' });

    setTimeout(() => {
      if (this.props.allbookmarks.length > 0) {
        const current_article_id = this.props.article.article.article['id'];
        const bookmarked_article_id = this.props.allbookmarks.map(art => {
          return art['article_id'];
        });
        const bookmarked_article = bookmarked_article_id.includes(
          current_article_id
        );

        if (bookmarked_article) {
          this.setState({ bookmarked: '#00acee' });
        }
      }
    }, 1000);
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.bookmark === 'You have successfully bookmarked this article'
    ) {
      this.setState({ bookmarked: '#00acee' });
    }
    if (
      nextProps.bookmark ===
      'You have successfully removed this article from your bookmarks'
    ) {
      this.setState({ bookmarked: '#cfcfd1' });
    }
  }
  handleBookmark = () => {
    const { slug } = this.props.article.article.article;
    this.props.bookmarkArticle(slug);
  };

  render() {
    return (
      <div className="likebuttons" id="bookmark">
        <i
          style={{ height: '100px', color: this.state.bookmarked }}
          className="fas fa-2x fa-bookmark"
          onClick={this.handleBookmark}
        />
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    article: state.articlereducer,
    bookmark: state.bookmarkReducer.bookmarks,
    allbookmarks: state.bookmarkReducer.allbookmarks
  };
};

export default connect(
  mapStateToProps,
  { bookmarkArticle, getBookmarkArticles }
)(BookmarkArticle);
