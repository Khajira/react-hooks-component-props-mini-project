import React from 'react';
import ArticleList from 'src/components/ArticleList';

const posts = [
  {
    title: 'Components 101',
    date: 'December 15, 2020',
    preview: 'Setting up the building blocks of your site',
  },
  {
    title: 'React Data Flow',
    date: 'December 11, 2020',
    preview: 'Passing props is never passé',
  },
  {
    title: 'Function Components vs Class Components',
    date: 'December 10, 2020',
    preview: 'React, meet OOJS.',
  },
];

function App() {
  return (
    <div className="App">
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;