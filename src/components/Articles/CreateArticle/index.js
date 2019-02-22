import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';
import { toast } from 'react-toastify';
import 'react-quill/dist/quill.snow.css';
import { createArticle } from '../../../actions/ArticleActions/actions';
import Nav from '../../common/nav';
import isEmpty from '../../../utils/isEmpty';

class MyEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      description: '',
      tag_list: ''
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      toast.error('Please login to create an article.');
      this.props.history.push('/login');
    }
  }
  componentWillReceiveProps(nextProps) {
    const slug = nextProps.articles.newArticle.article.slug;
    nextProps.history.push(`/article/${slug}`);
  }
  onHandleChange(e) {
    this.setState({ body: e });
  }

  onHandleSubmit(e) {
    e.preventDefault();
    if (isEmpty(this.state.body)) {
      toast.error('Please provide the body field');
    }
    const data = {
      article: this.state
    };
    this.props.createArticle(data);
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <form onSubmit={this.onHandleSubmit}>
            <div className="form-group">
              <input
                value={this.state.title}
                type="text"
                name="title"
                placeholder="Title"
                onChange={e => {
                  this.setState({ title: e.target.value });
                }}
                className="form-control"
                required
              />
              <input
                value={this.state.description}
                type="text"
                name="description"
                placeholder="Description"
                onChange={e => {
                  this.setState({ description: e.target.value });
                }}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <ReactQuill
                modules={MyEditor.modules}
                formats={MyEditor.formats}
                value={this.state.body}
                placeholder="Body"
                onChange={this.onHandleChange}
              />
            </div>
            <button id="post" className="btn btn-primary">
              Post
            </button>
          </form>
          <br />
        </div>
      </div>
    );
  }
}

MyEditor.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image', 'video'],
    ['clean'],
    ['code-block']
  ]
};

MyEditor.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'link',
  'image',
  'video',
  'code-block'
];

MyEditor.propTypes = {
  createArticle: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  articles: PropTypes.object.isRequired
};
MyEditor.defaultProps = {
  createArticle: PropTypes.array.isRequired
};
const mapStateToProps = state => {
  return state;
};

export default withRouter(
  connect(
    mapStateToProps,
    { createArticle }
  )(MyEditor)
);
