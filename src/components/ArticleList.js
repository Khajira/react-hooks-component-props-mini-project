import React from 'react';

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post, index) => (
        <article key={index}>
          <h3>{post.title}</h3>
          <small>{post.date}</small>
          <p>{post.preview}</p>
        </article>
      ))}
    </main>
  );
}

export default ArticleList;