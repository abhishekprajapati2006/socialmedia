import React from 'react';
import Post from './Post';
import { useSelector } from 'react-redux';

const Posts = () => {
  const posts = useSelector((state) => state.post?.posts || []); // Safely access posts
  
  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post._id} post={post} />)
      ) : (
        <p>No posts available.</p> // Fallback message when there are no posts
      )}
    </div>
  );
};

export default Posts;
