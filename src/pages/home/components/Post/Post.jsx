import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from '../PostHeader';
import './styles.css';

const Post = ({ user }) => (
  <div className="Post">
    <PostHeader
      img={user.img}
      name={user.name}
    />
  </div>
);

Post.propTypes = {
  user: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
