import React from 'react';
import './styles.css';

const PostContent = ({ content }) => (
  content.map(postContent => (
    <img className="PostContent" alt="imagen" src={postContent.src} />
  ))
);

export default PostContent;
