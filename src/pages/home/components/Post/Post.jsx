import React from 'react';
import PropTypes from 'prop-types';
import {
  PostCaption,
  PostContent,
  PostFooter,
  PostHeader,
  PostLikes,
  PostComments,
} from './components';
import './styles.css';

const Post = ({ post }) => (
  <div className="Post">
    <PostHeader
      img={post.user.image_url}
      name={post.user.name}
      location={post.location}
    />
    <PostContent content={post.content} />
    <PostFooter />
    <PostLikes likes={post.likes} />
    <PostCaption caption={post.caption} user={post.user.username} />
    <PostComments comments={post.comments} />
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.string,
    }),
  }).isRequired,
};

export default Post;
