import React from 'react';
import ArticleList from '../ArticleList';

export const ArticleNav = () => {
  return (
    <div className="container">
      <ul id="tabs-swipe-demo" className="tabs">
        <li className="tab col s3">
          <a className="active" href="#test-swipe-1">
            Articles
          </a>
        </li>
        <li className="tab col s3">
          <a href="#test-swipe-2">Create Article</a>
        </li>
      </ul>
      <div id="test-swipe-1">
        <ArticleList />
      </div>
      <div id="test-swipe-2">Create Article</div>
    </div>
  );
};
