import { Row, Col } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import dateformat from 'dateformat';
import renderHTML from 'react-render-html';
import React from 'react';
import '../../../../assets/css/articleDetail.scss';

const articleDetail = props => {
  const article = props.article.article.article;
  const author = article.author;
  const followStatus = author.following;
  const tags = article.tag_list;
  const date = article.created_at;
  const formatDate = dateformat(date, 'dddd, mmmm dS, yyyy');

  const getTags = () =>
    tags.map(item => {
      return <button className="tags-btn">{item}</button>;
    });

  const getImage = () => {
    if (!author.image) {
      const new_image = require('../../../../assets/images/profile.png');
      return new_image;
    } else {
      return author.image;
    }
  };

  const followBtn = () => {
    if (followStatus === null) {
      return (
        <div>
          <button className="follow">Follow</button>
        </div>
      );
    }
  };

  const ownerUpdate = () => {
    const auth = props.auth;
    if (auth.isAuthenticated) {
      const article = props.article.article.article;
      const author = article.author;
      const user = auth.user.username;

      if (user === author.username) {
        return (
          <div className="update-link">
            <NavLink to="/edit-article">
              <i className="material-icons">edit</i>
            </NavLink>
          </div>
        );
      }
    }
  };

  return (
    <div className="container">
      <div>
        <h3>{article.title}</h3>
        <h5 className="description">{article.description}</h5>
        <Row>
          <Col s={1}>
            <img
              src={getImage()}
              className="responsive-img circle escalate"
              height="50px"
              width="50px"
              alt="Avatar"
            />
          </Col>

          <Col s={1}>
            <a href="/">{author.username}</a>
            {followBtn()}
          </Col>
          <Col s={2}>
            {' '}
            <b>{article.read_time}</b>
          </Col>
          <Col>
            <b className="description">{formatDate}</b>
          </Col>
          { ownerUpdate() }
        </Row>
        <div className="bd-image">
          <p>{renderHTML(article.body)}</p>
        </div>
        {getTags()}

        <hr />
        <div />
      </div>
    </div>
  );
};

export default articleDetail;
