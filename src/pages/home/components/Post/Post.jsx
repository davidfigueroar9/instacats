import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './components/PostHeader';
import PostFooter from './components/PostFooter';
import PostContent from './components/PostContent';
import PostLikes from './components/PostLikes';
import './styles.css';


const Post = ({ post }) => (
  <div className="Post">
    <PostHeader
      img={post.user.image_url}
      name={post.user.name}
    />
    <PostContent content={post.content} />
    <PostFooter />
    <PostLikes likes={post.likes} />
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Post;
