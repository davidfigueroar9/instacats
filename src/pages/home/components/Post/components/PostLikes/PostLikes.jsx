import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const PostLikes = ({ likes }) => (
  <span className="PostLikes">
    {`${likes} likes`}
  </span>
);

PostLikes.propTypes = {
  likes: PropTypes.number.isRequired,
};

export default PostLikes;
