import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';
import { toast } from 'react-toastify';
import 'react-quill/dist/quill.snow.css';
import { editArticle } from '../../../actions/ArticleActions/actions';
import Nav from '../../common/nav';
import isEmpty from '../../../utils/isEmpty';

class EditArticle extends Component {
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

  componentWillMount() {
    const { article } = this.props.articlereducer.article;
    const { title, body, description } = article;
    this.setState({
      title: title,
      body: body,
      description: description
    });
  }
  componentWillReceiveProps(nextProps) {
    const { article } = this.props.articlereducer.article;
    const { slug } = article;
    nextProps.history.push(`/article/${slug}`);
  }

  
  onHandleChange(e) {
    this.setState({ body: e });
  }

  onHandleSubmit(e) {
    const { article } = this.props.articlereducer.article;
    const { slug } = article;
    e.preventDefault();
    if (isEmpty(this.state.body)) {
      toast.error('Please provide the body field');
    }
    const data = {
      article: this.state
    };
    this.props.editArticle(slug, data);
  }
  
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <form onSubmit={this.onHandleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={e => {
                  this.setState({ title: e.target.value });
                }}
                className="form-control"
                required
              />
              <input
                type="text"
                name="description"
                value={this.state.description}
                onChange={e => {
                  this.setState({ description: e.target.value });
                }}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <ReactQuill
                modules={EditArticle.modules}
                formats={EditArticle.formats}
                value={this.state.body}
                onChange={this.onHandleChange}
              />
            </div>
            <button id="post" className="btn btn-primary">
              Update
            </button>
          </form>
          <br />
        </div>
      </div>
    );
  }
}

EditArticle.modules = {
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

EditArticle.formats = [
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

EditArticle.propTypes = {
  editArticle: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  articlereducer: PropTypes.object.isRequired
};
EditArticle.defaultProps = {
  editArticle: PropTypes.array.isRequired
};
const mapStateToProps = state => {
  return state;
};

export default withRouter(
  connect(
    mapStateToProps,
    { editArticle }
  )(EditArticle)
);
