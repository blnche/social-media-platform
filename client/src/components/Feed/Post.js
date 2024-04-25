import React from 'react';
const Feed = () => {
    const post = [
        {id : 1, author: 'Mcgonagan', content: 'First post'},
        {id : 2, author: 'michel', content: 'Second post'},
        {id : 3, author: 'alice', content: 'Third post'},
    ];
return (
    <div>
      <h2>Feed</h2>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.author}</h3>
          <p>{post.content}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Feed;