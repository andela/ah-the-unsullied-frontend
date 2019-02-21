import React from 'react';
import Nav from '../common/nav';
import ArticleList from '../Articles/ArticleList';

export const Home = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <ArticleList />
      </div>
    </div>
  );
};
